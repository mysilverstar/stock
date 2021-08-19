import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { db } from "../../utils/firebase";
import "./HistoryTable.css";

function HistoryTable({ trading, store, handleItemSelect, setFinance }) {
  const { key: tradingKey, data } = trading;
  const { color, display } = data;
  const { authenticate } = store;

  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("user")
      .doc(authenticate.user)
      .collection("backup")
      .doc(tradingKey)
      .collection("items")
      .orderBy("outdate", "desc")
      .onSnapshot((snapshot) => {
        if (snapshot.size > 0) {
          let priceSum = 0;
          let sellpriceSum = 0;
          setItems(
            snapshot.docs.map((doc) => {
              const data = doc.data();
              priceSum += data.price * data.quantity;
              sellpriceSum += data.sellprice * data.quantity;
              return data;
            })
          );
          setFinance((finance) => ({
            ...finance,
            ...{
              [tradingKey]: { price: priceSum, sellprice: sellpriceSum },
            },
          }));
        } else {
          db.collection("user")
            .doc(authenticate.user)
            .collection("backup")
            .doc(tradingKey)
            .delete();
        }
      });
    return unsubscribe;
  }, [authenticate, tradingKey, setFinance]);

  const handleItemClick = useCallback(
    (e) => {
      e.currentTarget.setAttribute("class", "tr selected");
      handleItemSelect({
        target: e.currentTarget,
        tradingKey,
      });
      e.stopPropagation();
    },
    [tradingKey, handleItemSelect]
  );
  return (
    <div className="historytable">
      <div className="table_title" style={{ color: color }}>
        <strong>{display}</strong>
      </div>
      <div className="table">
        <div className="thead">
          <div className="tr">
            <div className="head stock_name">종목명</div>
            <div className="head stock_profit">
              <span className="main_text">평가손익</span>
              <span className="sub_text">손익률</span>
            </div>
            <div className="head stock_quantity">수량</div>
            <div className="head stock_price">
              <span className="main_text">매매가</span>
              <span className="sub_text">매입가</span>
            </div>
          </div>
        </div>
        <div className="tbody">
          {items.map((item) => {
            const { sellprice, price, quantity } = item;
            const profit = (sellprice - price) * quantity;
            const profitRatio = ((sellprice - price) / price) * 100;
            let profitColor = { color: "white" };
            if (profit > 0) {
              profitColor = { color: "#d24f45" };
            } else if (profit < 0) {
              profitColor = { color: "#1261c4" };
            }
            return (
              <div className="tr" onClick={handleItemClick} key={item.name}>
                <div className="item stock_name">{item.name}</div>
                <div className="item stock_profit" style={profitColor}>
                  <span className="main_text">
                    {profit.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                  <span className="sub_text">
                    {profitRatio.toFixed(2) + " %"}
                  </span>
                </div>
                <div className="item stock_quantity">{quantity}</div>
                <div className="item stock_price">
                  <span className="main_text" style={profitColor}>
                    {String(sellprice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                  <span className="sub_text" style={{ color: "gray" }}>
                    {String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, null)(HistoryTable);
