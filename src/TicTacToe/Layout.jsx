import React from "react";
import Box from "./Box";
import "./Layout.css";

function Layout({ boxes, onClick }) {
  console.log(boxes);
  return (
    <div id="layout">
      {boxes.map((box, i) => (
        <Box key={i} value={box} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}
export default Layout;
