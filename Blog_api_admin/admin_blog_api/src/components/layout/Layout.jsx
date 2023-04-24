import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div>
        <Sidebar></Sidebar>
        <div class="wrapper-container">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Layout;
