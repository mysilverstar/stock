import React, { useState } from "react";
import {
  Button,
  DialogActions,
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  OutlinedInput,
} from "@material-ui/core";

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
    color: "#000",
  },
  formInput: {
    width: "100%",
    marginBottom: "10px",
  },
}));

function BackupStock({ swipeItem, onConfirm, onCancel }) {
  const classes = useStyles();
  const [price, setPrice] = useState(swipeItem.price);
  const [quantity, setQuantity] = useState({
    val: swipeItem.quantity,
    exceed: false,
    empty: swipeItem.quantity === 0,
  });

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleQuantityChange = (event) => {
    const changed = event.target.value;
    setQuantity({
      val: changed,
      exceed: Number(changed) > Number(swipeItem.quantity),
      empty: Number(changed) === 0,
    });
  };
  const handleBackupItem = (event) => {
    event.preventDefault();
    if (quantity.exceed || quantity.empty) {
      return;
    }
    onConfirm({
      key: swipeItem.key,
      price: swipeItem.price,
      quantity: swipeItem.quantity,
      indate: swipeItem.indate,
      sellquantity: Number(quantity.val),
      sellprice: Number(price),
      backupAll: swipeItem.quantity === Number(quantity.val),
    });
  };

  return (
    <div className={classes.paper}>
      <h3 style={{ fontSize: "20px", margin: "0 0 20px" }}>매매 정보</h3>
      <form>
        <FormControl variant="outlined" className={classes.formInput}>
          <InputLabel htmlFor="name-input">종목명</InputLabel>
          <OutlinedInput
            id="name-input"
            value={swipeItem.key}
            label="종목명"
            disabled={true}
          />
        </FormControl>
        <FormControl variant="outlined" className={classes.formInput}>
          <InputLabel htmlFor="price-input">매매가</InputLabel>
          <OutlinedInput
            id="price-input"
            value={price}
            onChange={handlePriceChange}
            label="매매가"
            type="number"
            required={true}
          />
        </FormControl>
        <FormControl variant="outlined" className={classes.formInput}>
          <InputLabel
            error={quantity.exceed || quantity.empty}
            htmlFor="quantity-input"
          >
            수량
          </InputLabel>
          <OutlinedInput
            id="quantity-input"
            value={quantity.val}
            onChange={handleQuantityChange}
            label="수량"
            type="number"
            required={true}
            error={quantity.exceed || quantity.empty}
          />
          {quantity.empty && (
            <FormHelperText error id="accountId-error">
              매매수량을 입력해주세요.
            </FormHelperText>
          )}
          {quantity.exceed && (
            <FormHelperText error id="accountId-error">
              보유수량을 초과할 수 없습니다.
            </FormHelperText>
          )}
        </FormControl>
        <DialogActions>
          <Button color="primary" onClick={onCancel}>
            취소
          </Button>
          <Button color="primary" onClick={handleBackupItem} type="submit">
            확인
          </Button>
        </DialogActions>
      </form>
    </div>
  );
}

export default BackupStock;
