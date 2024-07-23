import React from "react";

const Reset = ({ onClickReset }) => {
  return (
    <div
      className="reset"
      onClick={onClickReset}
      style={{
        display: "flex",
        marginRight: "5px",
        textDecoration: "underline",
        color: "white",
        fontSize: "1rem",
      }}
    >
      Reset
    </div>
  );
};

export default Reset;
