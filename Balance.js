import React, { useState } from "react";
import "./balance.css";

const Balance = () => {
  const [bal, updatebal] = useState(2000);

  const incmNum = () => {
    updatebal(bal + 1000);
  };
  const decrNUm = () => {
    if (bal > 0) {
      updatebal(bal - 1000);
    } else {
      updatebal(0);
    }
  };

  return (
    <>
      <div className="main">
        <div className="card">
          <h1>Total Balence</h1>
          <h2>{`Rs.${bal}`}</h2>
          <div className="btn">
            <button onClick={incmNum} className="ebtn">
              1000
            </button>
            <button onClick={decrNUm} className="dbtn">
              1000
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
