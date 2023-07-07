import React from "react";
import { useRoutes } from "react-router-dom";
import Nav from "./Nav";
import RouteFunc from "./RouteFunc";

export default function App() {
  return (
    <>
      <Nav />
      <RouteFunc />
    </>
  );
}
