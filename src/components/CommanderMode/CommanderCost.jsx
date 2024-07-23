import React from "react";
import { Button } from "react-bootstrap";
import "./CommanderCost.css";

const CommanderCost = ({ commanderCost, onCommanderCostClick }) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <p className="font-weight-bold my-1 text-center">cost:</p>
        <p className="font-weight-bold my-1 text-center">{commanderCost}</p>
        <Button
          variant="outline-info"
          className="btn-sm custom-button"
          onClick={onCommanderCostClick}
        >
          +2
        </Button>
      </div>
    </>
  );
};

export default CommanderCost;
