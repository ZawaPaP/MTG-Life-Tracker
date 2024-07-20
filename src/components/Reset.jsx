import React from "react";
import "./Reset.css";

const Reset = ({ onClickReset }) => {
  return (
    <div className="reset" onClick={onClickReset}>
      Reset
    </div>
  );
};

export default Reset;
