import React from "react";
import "./ProfitTable.css";

function ProfitTable() {
  const profit = 1000000;
  const profitRatio = 23;
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
          {profit}
        </div>
      </div>
      <div className="tr">
        <div className="th">총평가수익률</div>
        <div className="td" style={profitColor}>
          {profitRatio}%
        </div>
      </div>
    </div>
  );
}

export default ProfitTable;
