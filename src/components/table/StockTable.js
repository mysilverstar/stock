import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { db } from "../../utils/firebase";
import "./StockTable.css";
import TableItem from "./TableItem";

function StockTable({ trading, store, handleItemSelect }) {
  const [items, setItems] = useState([]);

  const { key: tradingKey, data } = trading;
  const { color, display } = data;
  const { authenticate } = store;

  useEffect(() => {
    const unsubscribe = db
      .collection("user")
      .doc(authenticate.user)
      .collection("trading")
      .doc(tradingKey)
      .collection("items")
      .orderBy("indate", "desc")
      .onSnapshot((snapshot) => {
        if (snapshot.size > 0) {
          setItems(snapshot.docs.map((doc) => doc.data()));
        } else {
          db.collection("user")
            .doc(authenticate.user)
            .collection("trading")
            .doc(tradingKey)
            .delete();
        }
      });
    return unsubscribe;
  }, [authenticate, tradingKey]);
  return (
    <div className="stocktable">
      <div className="table_title" style={{ color: color }}>
        <strong>{display}</strong>
      </div>
      <div className="table">
        <div className="thead">
          <div className="tr">
            <div className="stock_name">종목명</div>
            <div className="stock_price">단가</div>
            <div className="stock_quantity">수량</div>
            <div className="stock_indate">상장일</div>
          </div>
        </div>
        <div className="tbody">
          {items.map((item) => (
            <TableItem
              key={item.name}
              tradingKey={tradingKey}
              item={item}
              handleItemSelect={handleItemSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, null)(StockTable);
