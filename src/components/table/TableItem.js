import { Modal } from "@material-ui/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Tradings } from "../../constants/Trading";
import { db } from "../../utils/firebase";
import BackupStock from "../input/BackupStock";
import "./TableItem.css";

function TableItem({ tradingKey, item, handleItemSelect, store }) {
  const { authenticate } = store;

  const isMounted = useRef(false);
  const [swipeItem, setSwipeItem] = useState(null);
  const [backupItem, setBackupItem] = useState(null);
  const [open, setOpen] = useState(false);

  const getDateState = (item) => {
    const date = new Date(item.indate);
    date.setHours(9, 0, 0, 0);
    const now = new Date();
    const diff = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);
    let changeStyle = { color: "gray" };
    let ddayState = 0;
    if (diff >= 0 && diff < 1) {
      changeStyle = { color: "chartreuse" };
      ddayState = 1;
    } else if (diff >= -2 && diff < 0) {
      changeStyle = { color: "red" };
      ddayState = 2;
    } else if (diff < -2) {
      changeStyle = { color: "darkgreen" };
    }
    const displayDate = date.getMonth() + 1 + "/" + date.getDate();

    return { ddayState, changeStyle, displayDate };
  };

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  const { ddayState, changeStyle, displayDate } = getDateState(item);
  const dbBackup = useCallback(() => {
    if (!backupItem) {
      return;
    }
    const rootRef = db.collection("user").doc(authenticate.user);
    const originRef = rootRef
      .collection("trading")
      .doc(tradingKey)
      .collection("items")
      .doc(backupItem.key);
    const backupTradingRef = rootRef.collection("backup").doc(tradingKey);
    const backupRef = backupTradingRef.collection("items").doc(backupItem.key);
    const trading = Tradings.find((trading) => trading.key === tradingKey);
    db.runTransaction((transaction) =>
      transaction.get(backupRef).then((snapshot) => {
        const data = snapshot.data();

        // update backup db
        transaction.set(backupTradingRef, {
          display: trading.display,
          priority: trading.priority,
          color: trading.color,
        });
        if (snapshot.exists) {
          const avePrice =
            (data.sellprice * data.quantity +
              backupItem.sellprice * backupItem.sellquantity) /
            (data.quantity + backupItem.sellquantity);
          transaction.update(backupRef, {
            sellprice: Number(avePrice.toFixed(0)),
            quantity: data.quantity + backupItem.sellquantity,
            outdate: new Date().valueOf(),
          });
        } else {
          transaction.set(backupRef, {
            name: backupItem.key,
            price: backupItem.price,
            sellprice: backupItem.sellprice,
            quantity: backupItem.sellquantity,
            indate: backupItem.indate,
            outdate: new Date().valueOf(),
          });
        }

        // update origianl db
        if (backupItem.backupAll) {
          transaction.delete(originRef);
        } else {
          transaction.update(originRef, {
            quantity: backupItem.quantity - backupItem.sellquantity,
          });
        }
      })
    )
      .then(() => {
        console.log("Transaction successfully committed!");
        if (isMounted.current) {
          setBackupItem(null);
        }
      })
      .catch((error) => {
        console.log("Transaction failed: ", error);
        if (isMounted.current) {
          setBackupItem(null);
        }
      });
  }, [tradingKey, authenticate, backupItem]);

  const getX = (e) => {
    var x = e.clientX;
    if (!x) {
      x = e.touches[0].screenX;
    }
    return Number(x.toFixed());
  };

  const handleItemClick = useCallback(
    (e) => {
      if (Math.abs(getX(e) - swipeItem?.startX) > 10) {
        return;
      }
      e.currentTarget.setAttribute("class", "tr selected");
      handleItemSelect({
        target: e.currentTarget,
        tradingKey,
      });
      e.stopPropagation();
    },
    [tradingKey, handleItemSelect, swipeItem]
  );
  const handleSwipeStart = useCallback((e) => {
    setSwipeItem({
      target: e.currentTarget,
      key: e.currentTarget.children[0].innerText,
      price: Number(e.currentTarget.children[1].textContent.replace(",", "")),
      quantity: Number(e.currentTarget.children[2].textContent),
      indate: Number(e.currentTarget.children[3].getAttribute("originaldate")),
      startX: getX(e),
      dx: getX(e),
    });
  }, []);
  const handleSwipeMove = useCallback(
    (e) => {
      if (!swipeItem) {
        return;
      }
      let dx = getX(e);
      let leftonly = swipeItem.startX > dx ? dx : swipeItem.startX;
      setSwipeItem({ ...swipeItem, dx: leftonly });
    },
    [swipeItem]
  );
  const handleSwipeEnd = useCallback(
    (e) => {
      if (!swipeItem) {
        return;
      }
      if (swipeItem.startX - swipeItem.dx > 100) {
        setOpen(true);
      } else {
        setSwipeItem(null);
      }
    },
    [swipeItem]
  );
  const handleAnimationEnd = useCallback(
    (e) => {
      if (backupItem.backupAll && e.animationName === "hiderow") {
        e.currentTarget.parentElement.setAttribute("style", "display: none");
        dbBackup();
        setSwipeItem(null);
      } else if (!backupItem.backupAll && e.animationName === "swipeout") {
        e.currentTarget.setAttribute("class", "tr");
        dbBackup();
        setSwipeItem(null);
      }
    },
    [backupItem, dbBackup]
  );

  const handleBackupConfirm = useCallback(
    (backupInfo) => {
      setBackupItem(backupInfo);
      setOpen(false);
      if (swipeItem.quantity === backupInfo.quantity) {
        swipeItem.target.setAttribute("class", "tr swipeouthide");
      } else {
        swipeItem.target.setAttribute("class", "tr swipeout");
      }
    },
    [swipeItem]
  );

  const handleBackupCancel = useCallback(() => {
    setOpen(false);
    setSwipeItem(null);
  }, []);

  return (
    <div className="tableitem">
      <div className="tr-bg">보관</div>
      <div
        className="tr"
        onClick={handleItemClick}
        onTouchStart={handleSwipeStart}
        onTouchMove={handleSwipeMove}
        onTouchEnd={handleSwipeEnd}
        onMouseDown={handleSwipeStart}
        onMouseMove={handleSwipeMove}
        onMouseUpCapture={handleSwipeEnd}
        onAnimationEnd={handleAnimationEnd}
        style={
          swipeItem?.key === item.name
            ? {
                left: `${swipeItem.dx - swipeItem.startX}px`,
              }
            : {}
        }
      >
        <div className="item stock_name">{item.name}</div>
        <div className="item stock_price">
          {String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div className="item stock_quantity">{item.quantity}</div>
        <div
          className="item stock_indate"
          style={changeStyle}
          originaldate={item.indate}
        >
          <span className="main_text">{displayDate}</span>
          {ddayState > 0 && (
            <span className="sub_text" style={{ color: "inherit" }}>
              {ddayState === 1 ? "입고완료" : "입고예정"}
            </span>
          )}
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="add-stock"
        aria-describedby="add-stock"
      >
        <div>
          <BackupStock
            swipeItem={swipeItem}
            onConfirm={handleBackupConfirm}
            onCancel={handleBackupCancel}
          />
        </div>
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}
export default connect(mapStateToProps, null)(React.memo(TableItem));
