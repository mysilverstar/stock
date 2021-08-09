import React from "react";
import ReactLoading from "react-loading";
import "./LoadingTool.css";

function LoadingTool() {
  return (
    <div className="loading-area">
      <ReactLoading
        type={"spinningBubbles"}
        color={"gray"}
        height={100}
        width={100}
      />
    </div>
  );
}

export default LoadingTool;
