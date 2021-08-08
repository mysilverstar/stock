import "./Main.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { logout } from "../store/Store";
import StockTable from "../components/StockTable";
import AddStock from "../components/AddStock";
import { auth, db } from "../utils/firebase";

import { Modal, Fab, makeStyles } from "@material-ui/core";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { green } from "@material-ui/core/colors";
import DeleteStock from "../components/DeleteStock";

const useStyles = makeStyles((theme) => ({
  fab: {},
  fabEdit: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
}));

function Main({ history, store, doLogout }) {
  const { authenticate } = store;

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [tradings, setTradings] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  if (!authenticate.isAuth) {
    history.replace("/");
  }

  useEffect(() => {
    const unsubscribe = db
      .collection("user")
      .doc(authenticate?.user)
      .collection("trading")
      .orderBy("priority", "asc")
      .onSnapshot((snapshot) => {
        setTradings(
          snapshot.docs.map((doc) => ({
            key: doc.id,
            data: doc.data(),
          }))
        );
      });
    return unsubscribe;
  }, [authenticate]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenDel = () => {
    setOpenDel(true);
  };
  const handleCloseDel = () => {
    setOpenDel(false);
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      doLogout(false);
    });
  };

  const handleItemSelect = (item) => {
    selectedItem?.target.removeAttribute("class");
    item?.target.setAttribute("class", "selected");
    setSelectedItem(item);
  };

  return (
    <>
      <header>
        <div className="header_main">
          <span className="username">{authenticate.user}</span>
          <div className="logout" onClick={handleLogout}>
            <span>Logout</span>
            <ExitToAppOutlinedIcon />
          </div>
        </div>
      </header>
      <div
        className="main"
        onClick={() => {
          handleItemSelect(null);
        }}
      >
        {tradings.map((trading) => (
          <StockTable
            key={trading.key}
            trading={trading}
            handleItemSelect={handleItemSelect}
          />
        ))}
      </div>
      <div
        className={
          selectedItem
            ? "fab-area unselect fadeout"
            : "fab-area unselect fadein"
        }
      >
        <Fab
          className={classes.fab}
          color="primary"
          aria-label="add"
          onClick={handleOpen}
        >
          <AddIcon />
        </Fab>
      </div>
      <div
        className={
          selectedItem ? "fab-area select slidein" : "fab-area select slideout"
        }
      >
        <Fab
          className={classes.fabEdit}
          color="secondary"
          aria-label="edit"
          onClick={handleOpen}
        >
          <EditIcon />
        </Fab>
        <Fab
          className={classes.fab}
          color="secondary"
          aria-label="delete"
          onClick={handleOpenDel}
        >
          <DeleteIcon />
        </Fab>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-stock"
        aria-describedby="add-stock"
      >
        <div>
          <AddStock
            setOpen={setOpen}
            selectedItem={selectedItem}
            handleItemSelect={handleItemSelect}
          />
        </div>
      </Modal>
      <Modal
        open={openDel}
        onClose={handleCloseDel}
        aria-labelledby="add-stock"
        aria-describedby="add-stock"
      >
        <div>
          <DeleteStock
            setOpen={setOpenDel}
            selectedItem={selectedItem}
            handleItemSelect={handleItemSelect}
          />
        </div>
      </Modal>
    </>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    doLogout: () => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
