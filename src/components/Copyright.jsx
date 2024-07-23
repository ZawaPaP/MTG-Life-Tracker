import React from "react";
import copyrightImage from "../images/copyright.png";

const Copyright = () => {
  return (
    <p className="copy-right" style={{ display: "flex", alignItems: "center" }}>
      <img
        src={copyrightImage}
        alt="copyright"
        style={{
          marginTop: "1rem",
          width: "20%",
          marginLeft: "4px",
        }}
      />
    </p>
  );
};

export default Copyright;
