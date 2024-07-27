import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./PoisonCounter.css";

const PoisonCounter = () => {
  const [PoisonCounter, setPoisonCounter] = useState(0);

  const onPoisonCounterClick = (e) => {
    const { value } = e.target;
    setPoisonCounter((prev) => prev + parseInt(value));
  };

  return (
    <div
      className="d-flex justify-content-between my-1"
      style={{ height: "7vh" }}
    >
      <p className="mb-1 text-center">poison:</p>
      <div className="d-flex justify-content-between">
        <Button
          variant="outline-success"
          className="btn-sm poison-custom-button"
          onClick={onPoisonCounterClick}
          value="-1"
        >
          -1
        </Button>
        <p className="poison-counter text-center">{PoisonCounter}</p>
        <Button
          variant="outline-danger"
          className="btn-sm poison-custom-button"
          onClick={onPoisonCounterClick}
          value="+1"
        >
          +1
        </Button>
      </div>
    </div>
  );
};

export default PoisonCounter;
