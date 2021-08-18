import React from "react";
import { db } from "../utils/firebase";
import { Button, DialogActions, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";

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

function DeleteStock({
  setOpen,
  store,
  selectedItem,
  handleItemSelect,
  backup,
}) {
  if (!selectedItem) {
    setOpen(false);
  }
  const name = selectedItem?.target.children[0].innerText;

  const classes = useStyles();
  const { authenticate } = store;

  const deleteItem = () => {
    if (store.guestLock && authenticate.user === "guest@guest.com") {
      alert("please sign-in with private account");
      setOpen(false);
      handleItemSelect(null);
      return;
    }
    db.collection("user")
      .doc(authenticate.user)
      .collection(backup ? "backup" : "trading")
      .doc(selectedItem.tradingKey)
      .collection("items")
      .doc(name)
      .delete()
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
    setOpen(false);
    handleItemSelect(null);
  };

  return (
    <div className={classes.paper}>
      <h3 id="simple-modal-title">삭제</h3>
      <div style={{ marginBottom: "20px" }}>삭제 하시겠습니까?</div>
      <DialogActions>
        <Button color="primary" onClick={() => setOpen(false)}>
          취소
        </Button>
        <Button color="primary" onClick={deleteItem} type="submit" autoFocus>
          삭제
        </Button>
      </DialogActions>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, null)(DeleteStock);
