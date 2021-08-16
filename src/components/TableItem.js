import React, { useCallback, useState } from "react";
import "./TableItem.css";

function TableItem({ tradingKey, item, handleItemSelect }) {
  const [swipeItem, setSwipeItem] = useState({
    key: undefined,
    startX: 0,
    dx: 0,
  });

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

  const { ddayState, changeStyle, displayDate } = getDateState(item);

  const getX = (e) => {
    var x = e.clientX;
    if (!x) {
      x = e.touches[0].screenX.toFixed(0);
    }
    return x;
  };
  const handleItemClick = useCallback(
    (e) => {
      if (Math.abs(getX(e) - swipeItem.startX) > 10) {
        return;
      }
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
      key: e.currentTarget.firstChild.innerText,
      startX: getX(e),
      dx: getX(e),
    });
  }, []);
  const handleSwipeMove = useCallback(
    (e) => {
      if (!swipeItem.key) {
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
      if (swipeItem.startX - swipeItem.dx > 100) {
        e.currentTarget.setAttribute("class", "tr swipeout");
      } else {
        setSwipeItem({ ...swipeItem, key: undefined });
      }
    },
    [swipeItem]
  );
  const handleAnimationEnd = useCallback((e) => {
    if (e.animationName === "hiderow") {
      e.currentTarget.parentElement.setAttribute("style", "display: none");
    }
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
          swipeItem.key === item.name
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
          originaldate={new Date(item.indate)}
        >
          <span className="main_text">{displayDate}</span>
          {ddayState > 0 && (
            <span className="sub_text" style={{ color: "inherit" }}>
              {ddayState === 1 ? "입고완료" : "입고예정"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(TableItem);
