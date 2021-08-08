import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { db } from "../utils/firebase";
// import useLongPress from "../utils/useLongPress";
import "./StockTable.css";

function StockTable({ trading, store, handleItemSelect }) {
  const [items, setItems] = useState([]);

  const { key, data } = trading;
  const { color, display } = data;
  const { authenticate } = store;

  useEffect(() => {
    const unsubscribe = db
      .collection("user")
      .doc(authenticate.user)
      .collection("trading")
      .doc(key)
      .collection("items")
      .orderBy("indate", "desc")
      .onSnapshot((snapshot) => {
        if (snapshot.size > 0) {
          setItems(snapshot.docs.map((doc) => doc.data()));
        } else {
          db.collection("user")
            .doc(authenticate.user)
            .collection("trading")
            .doc(key)
            .delete();
        }
      });
    return unsubscribe;
  }, [authenticate, key]);

  return (
    <div className="stocktable">
      <div className="table_title" style={{ color: color }}>
        <strong>{display}</strong>
      </div>
      <table>
        <thead>
          <tr>
            <th className="stock_name">종목명</th>
            <th className="stock_price">단가</th>
            <th className="stock_quantity">수량</th>
            <th className="stock_indate">상장일</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const date = new Date(item.indate);
            const now = new Date();
            now.setHours(9);
            const diff = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);
            let changeStyle = { color: "white" };
            let eve = false;
            if (diff >= -1 && diff < 1) {
              changeStyle = { color: "red" };
              eve = true;
            } else if (diff < -1) {
              changeStyle = { color: "green" };
            }
            return (
              <tr
                key={item.name}
                onClick={(event) => {
                  handleItemSelect({
                    target: event.currentTarget,
                    tradingKey: key,
                  });
                  event.stopPropagation();
                }}
              >
                <td className="item_name">{item.name}</td>
                <td className="item_price">
                  {String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
                <td className="item_quantity">{item.quantity}</td>
                <td
                  className="item_date"
                  style={changeStyle}
                  originaldate={date}
                >
                  <span className="main_text">
                    {date.getMonth() + 1 + "/" + date.getDate()}
                  </span>
                  {eve && <span className="sub_text">입고예정</span>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, null)(StockTable);
