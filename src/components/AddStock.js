import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  Button,
  DialogActions,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Select,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { db } from "../utils/firebase";
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
    padding: theme.spacing(2, 2, 1),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  formTrading: {
    minWidth: 120,
  },
  formInput: {
    width: "100%",
    marginBottom: "10px",
  },
}));

function AddStock({ setOpen, store, selectedItem, handleItemSelect }) {
  let sIndex = 0;
  let sName = "";
  let sPrice = "";
  let sQuantity = "";
  let sDate = new Date();
  if (selectedItem) {
    Tradings.forEach((trading, ind) => {
      if (trading.key === selectedItem.tradingKey) {
        sIndex = ind;
      }
    });
    sName = selectedItem.target.children[0].innerText;
    sPrice = selectedItem.target.children[1].innerText.replace(",", "");
    sQuantity = selectedItem.target.children[2].innerText;
    sDate = new Date(
      selectedItem.target.children[3].getAttribute("originaldate")
    );
  }

  const classes = useStyles();
  const [tradingIndex, setTradingIndex] = useState(sIndex);
  const [name, setName] = useState(sName);
  const [price, setPrice] = useState(sPrice);
  const [quantity, setQuantity] = useState(sQuantity);
  const [date, setDate] = useState(sDate);

  const { authenticate } = store;
  const isModified = selectedItem !== null;

  const handleChangeTrading = (event) => {
    setTradingIndex(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleDateChange = (date) => {
    setDate(date);
  };
  const addItem = (event) => {
    event.preventDefault();
    if (authenticate.user === "guest@guest.com") {
      alert("please sign-in with private account");
      setOpen(false);
      handleItemSelect(null);
      return;
    }
    const trading = Tradings[tradingIndex];
    const dbRef = db
      .collection("user")
      .doc(authenticate.user)
      .collection("trading");
    dbRef.doc(trading.key).set({
      display: trading.display,
      priority: trading.priority,
      color: trading.color,
    });
    dbRef
      .doc(trading.key)
      .collection("items")
      .doc(name)
      .set({
        name: name,
        price: price,
        quantity: quantity,
        indate: date.valueOf(),
      })
      .then(() => {})
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    setOpen(false);
    handleItemSelect(null);
  };

  return (
    <div className={classes.paper}>
      <form>
        <FormControl className={classes.formTrading}>
          <InputLabel id="trading-select-label">증권계좌</InputLabel>
          <Select
            labelId="trading-select-label"
            id="trading-select"
            value={tradingIndex}
            onChange={handleChangeTrading}
            className={classes.selectEmpty}
            required={true}
            disabled={isModified}
          >
            {Tradings.map((trading, index) => (
              <MenuItem key={trading.key} value={index}>
                {trading.display}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formInput}>
          <InputLabel htmlFor="name-input">종목명</InputLabel>
          <OutlinedInput
            id="name-input"
            value={name}
            onChange={handleNameChange}
            label="Name"
            required={true}
            disabled={isModified}
          />
        </FormControl>
        <FormControl variant="outlined" className={classes.formInput}>
          <InputLabel htmlFor="price-input">단가</InputLabel>
          <OutlinedInput
            id="price-input"
            value={price}
            onChange={handlePriceChange}
            label="Price"
            type="number"
          />
        </FormControl>
        <FormControl variant="outlined" className={classes.formInput}>
          <InputLabel htmlFor="quantity-input">수량</InputLabel>
          <OutlinedInput
            id="quantity-input"
            value={quantity}
            onChange={handleQuantityChange}
            label="Quantity"
            type="number"
          />
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Month/Day/Year"
            value={date}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            PopoverProps={{
              anchorOrigin: { vertical: "top", horizontal: "right" },
              transformOrigin: { vertical: "bottom", horizontal: "right" },
            }}
            className={classes.formInput}
          />
        </MuiPickersUtilsProvider>
        <DialogActions>
          <Button color="primary" onClick={() => setOpen(false)}>
            취소
          </Button>
          <Button color="primary" onClick={addItem} type="submit" autoFocus>
            {selectedItem ? "수정" : "추가"}
          </Button>
        </DialogActions>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, null)(AddStock);
