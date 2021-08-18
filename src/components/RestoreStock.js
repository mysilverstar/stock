import React from "react";
import { db } from "../utils/firebase";
import { Button, DialogActions, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { Tradings } from "../constants/Trading";

const useStyles = makeStyles((theme) => ({
  paper: {
    boxSizing: "border-box",
    position: "absolute",
    width: "80%",
    maxWidth: "600px",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 3, 1),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
  },
}));

function RestoreStock({ setOpen, store, selectedItem, handleItemSelect }) {
  if (!selectedItem) {
    setOpen(false);
  }

  const classes = useStyles();
  const { authenticate } = store;

  const restoreItem = () => {
    if (store.guestLock && authenticate.user === "guest@guest.com") {
      alert("please sign-in with private account");
      setOpen(false);
      handleItemSelect(null);
      return;
    }

    const tradingKey = selectedItem.tradingKey;
    const name = selectedItem.target.children[0].textContent;
    const rootRef = db.collection("user").doc(authenticate.user);
    const tradingRef = rootRef.collection("trading").doc(tradingKey);
    const originRef = tradingRef.collection("items").doc(name);
    const backupRef = rootRef
      .collection("backup")
      .doc(tradingKey)
      .collection("items")
      .doc(name);
    const trading = Tradings.find((trading) => trading.key === tradingKey);

    db.runTransaction((transaction) =>
      transaction.get(backupRef).then((snapshot) => {
        const data = snapshot.data();
        transaction.delete(backupRef);
        return data;
      })
    )
      .then((data) => {
        console.log("Transaction successfully committed!");
        db.runTransaction((postTransaction) =>
          postTransaction.get(originRef).then((postSanpshot) => {
            const originData = postSanpshot.data();

            postTransaction.set(tradingRef, {
              display: trading.display,
              priority: trading.priority,
              color: trading.color,
            });
            if (postSanpshot.exists) {
              postTransaction.update(originRef, {
                quantity: originData.quantity + data.quantity,
              });
            } else {
              const { name, price, quantity, indate } = data;
              postTransaction.set(originRef, {
                name,
                price,
                quantity,
                indate,
              });
            }
          })
        );
      })
      .catch((error) => {
        console.log("Transaction failed: ", error);
      });
    setOpen(false);
    handleItemSelect(null);
  };

  return (
    <div className={classes.paper}>
      <h3 id="simple-modal-title">복원</h3>
      <div style={{ marginBottom: "20px" }}>복원 하시겠습니까?</div>
      <DialogActions>
        <Button color="primary" onClick={() => setOpen(false)}>
          취소
        </Button>
        <Button color="primary" onClick={restoreItem} type="submit" autoFocus>
          복원
        </Button>
      </DialogActions>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, null)(RestoreStock);
