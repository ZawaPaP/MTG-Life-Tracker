import React from "react";
import { Button } from "react-bootstrap";
import "./Menu.css";

const Menu = ({ onClick, isShow }) => {
  return isShow ? (
    <>
      <div className="menu">
        <Button
          variant="outline-secondary"
          className="config m-1"
          onClick={onClick}
        >
          Config
        </Button>
      </div>
    </>
  ) : null;
};

export default Menu;
