import React from "react";
import "./Box.css";

function Box({ value, onClick }) {
  return (
    <button id="box" onClick={onClick}>
      {value}
    </button>
  );
}
export default Box;
