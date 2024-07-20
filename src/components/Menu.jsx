import React from "react";
import { Button } from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <Button variant="outline-secondary" className="config m-1">
          設定
        </Button>
      </div>
    </>
  );
};

export default Menu;
