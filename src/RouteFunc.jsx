import { Route, useRoutes } from "react-router-dom";
import React from "react";
import TicTacToeGame from "./TicTacToe/TicTacToeGame";

export default function RouteFunc() {
  let element = useRoutes([
    { path: "/", element: <h1>Home</h1> },
    { path: "*", element: <h1>Not Found</h1> },
    { path: "/tictactoe", element: <TicTacToeGame /> },
  ]);

  return element;
}
