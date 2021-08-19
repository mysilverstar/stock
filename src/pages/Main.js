import "./Main.css";
import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { logon } from "../store/Store";
import StockTable from "../components/table/StockTable";
import AddStock from "../components/input/AddStock";
import { auth, db } from "../utils/firebase";

import { Modal, Fab, makeStyles } from "@material-ui/core";
import HistoryIcon from "@material-ui/icons/History";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { green } from "@material-ui/core/colors";
import DeleteStock from "../components/input/DeleteStock";
import { Link } from "react-router-dom";
import LoadingTool from "./LoadingTool";

const useStyles = makeStyles((theme) => ({
  fab: {},
  fabEdit: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
  icon: {
    color: "gray",
    fontSize: 30,
    position: "absolute",
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
  },
}));

function Main({ history, store, setUser, setLoading }) {
  console.log("Main START");
  const classes = useStyles();
  const { authenticate } = store;

  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [tradings, setTradings] = useState([]);
  const [selectedItem, setSelectedItem] = useState(undefined);
  const [reloading, setReloading] = useState(true);

  useEffect(() => {
    console.log("Main RENDERED");
    if (authenticate.checked && !authenticate.isAuth) {
      console.log("Main goRoot!!");
      history.replace("/");
      return;
    }

    const unsubscribe = db
      .collection("user")
      .doc(authenticate.user)
      .collection("trading")
      .orderBy("priority", "asc")
      .onSnapshot((snapshot) => {
        setTradings(
          snapshot.docs.map((doc) => ({
            key: doc.id,
            data: doc.data(),
          }))
        );
        setTimeout(() => {
          setLoading(false);
          setReloading(false);
        }, 500);
      });
    return unsubscribe;
  }, [authenticate, history, setLoading]);

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
      setUser(undefined);
    });
  };

  const handleItemSelect = useCallback(
    (item) => {
      // clear history
      selectedItem?.target.setAttribute("class", "tr");
      if (selectedItem?.target !== item?.target) {
        setSelectedItem(item);
      } else {
        setSelectedItem(null);
      }
    },
    [selectedItem]
  );

  return (
    <>
      <header>
        <div className="header_main">
          <Link to="/backup">
            <HistoryIcon className={classes.icon} />
          </Link>
          <Link to="/ipolist" target="_blank" rel="noopener noreferrer">
            <div className="title">
              <span className="main-title">Stock Manager</span>
              <span className="sub-title">
                {"@" + authenticate.user?.split("@")[0]}
              </span>
            </div>
          </Link>
          <div className="logout" onClick={handleLogout}>
            <span>Logout</span>
            <ExitToAppOutlinedIcon />
          </div>
        </div>
      </header>
      {reloading && <LoadingTool />}
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
      {selectedItem !== undefined && (
        <div
          className={
            selectedItem
              ? "fab-area select slidein"
              : "fab-area select slideout"
          }
        >
          <Fab
            className={classes.fabEdit}
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
      )}
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
        aria-labelledby="del-stock"
        aria-describedby="del-stock"
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
    setUser: (user) => dispatch(logon(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
