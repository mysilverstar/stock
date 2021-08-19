import React, { useMemo } from "react";
import "./ProfitTable.css";

function ProfitTable({ finance }) {
  const { profit, profitRatio } = useMemo(() => {
    let priceSum = 0;
    let sellpriceSum = 0;
    for (let key in finance) {
      const { price, sellprice } = finance[key];
      priceSum += price;
      sellpriceSum += sellprice;
    }
    return {
      profit: sellpriceSum - priceSum,
      profitRatio: ((sellpriceSum - priceSum) / priceSum) * 100,
    };
  }, [finance]);

  let profitColor = { color: "white" };
  if (profit > 0) {
    profitColor = { color: "#d24f45" };
  } else if (profit < 0) {
    profitColor = { color: "#d24f45" };
  }
  return (
    <div className="profittable">
      <div className="tr">
        <div className="th">총평가손익</div>
        <div className="td" style={profitColor}>
          {String(profit).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
      </div>
      <div className="tr">
        <div className="th">총평가수익률</div>
        <div className="td" style={profitColor}>
          {profitRatio.toFixed(2)}%
        </div>
      </div>
    </div>
  );
}

export default ProfitTable;
