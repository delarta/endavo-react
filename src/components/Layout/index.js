import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function Layout() {
  return (
    <div className="layout-grid">
      <SideBar />
      <TopBar />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
