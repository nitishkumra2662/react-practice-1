import React from "react";
import { useState } from "react";
import "./Square.css";

const Square = () => {
  const [value, setValue] = useState(null);
  function handelClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handelClick}>
      {value}
    </button>
  );
};

export default Square;
