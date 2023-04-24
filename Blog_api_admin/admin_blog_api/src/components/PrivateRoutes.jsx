import React from "react";
import { Outlet } from "react-router-dom";

function PrivateRoutes() {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}

export default PrivateRoutes;
