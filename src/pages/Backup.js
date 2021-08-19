import React, { useCallback, useEffect, useState } from "react";
import "./Backup.css";
import { connect } from "react-redux";
import { db } from "../utils/firebase";
import HistoryTable from "../components/table/HistoryTable";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CloudOffSharpIcon from "@material-ui/icons/CloudOffSharp";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import DeleteIcon from "@material-ui/icons/Delete";
import { Fab, makeStyles, Modal } from "@material-ui/core";
import { Link } from "react-router-dom";
import DeleteStock from "../components/input/DeleteStock";
import RestoreStock from "../components/input/RestoreStock";
import LoadingTool from "./LoadingTool";
import ProfitTable from "../components/table/ProfitTable";

const useStyles = makeStyles({
  fab: {},
  icon: {
    fontSize: 30,
    position: "absolute",
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
  },
  empty: {
    fill: "gray",
    fontSize: 100,
  },
});

function Backup({ history, store, setLoading }) {
  console.log("Backup START");
  const classes = useStyles();
  const { authenticate } = store;

  const [tradings, setTradings] = useState([]);
  const [openRestore, setOpenRestore] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [selectedItem, setSelectedItem] = useState(undefined);
  const [reloading, setReloading] = useState(true);
  const [finance, setFinance] = useState({});

  useEffect(() => {
    console.log("Backup RENDERED");
    if (authenticate.checked && !authenticate.isAuth) {
      console.log("Backup goRoot!!");
      history.replace("/");
      return;
    }

    const unsubscribe = db
      .collection("user")
      .doc(authenticate.user)
      .collection("backup")
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

  const handleOpenRestore = () => {
    setOpenRestore(true);
  };
  const handleCloseRestore = () => {
    setOpenRestore(false);
  };
  const handleOpenDel = () => {
    setOpenDel(true);
  };
  const handleCloseDel = () => {
    setOpenDel(false);
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
        <div className="header_backup">
          <Link to="/main">
            <ArrowBackIosIcon className={classes.icon} />
          </Link>
          <div className="title">
            <span className="main-title">매매손익</span>
          </div>
        </div>
      </header>
      {reloading && <LoadingTool />}
      <div
        className="backup"
        onClick={() => {
          handleItemSelect(null);
        }}
      >
        {tradings.length === 0 && (
          <div className="backup-empty">
            <CloudOffSharpIcon className={classes.empty} />
            <p>백업된 자료가 없습니다.</p>
          </div>
        )}
        {tradings.length > 0 && <ProfitTable finance={finance} />}
        {tradings.map((trading) => (
          <HistoryTable
            key={trading.key}
            trading={trading}
            handleItemSelect={handleItemSelect}
            setFinance={setFinance}
          />
        ))}
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
            className={classes.fab}
            color="primary"
            aria-label="restore"
            onClick={handleOpenRestore}
          >
            <RestoreFromTrashIcon />
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
        open={openRestore}
        onClose={handleCloseRestore}
        aria-labelledby="restore-stock"
        aria-describedby="restore-stock"
      >
        <div>
          <RestoreStock
            setOpen={setOpenRestore}
            selectedItem={selectedItem}
            handleItemSelect={handleItemSelect}
            backup
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
            backup
          />
        </div>
      </Modal>
    </>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, null)(Backup);
