import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <ul className="menu">
        <li className={`menu-item ${activeMenu === "posts" ? "active" : ""}`}>
          <Link onClick={() => setActiveMenu("posts")} to="/">
            Posts
          </Link>
        </li>
        <li
          className={`menu-item ${activeMenu === "dashboard" ? "active" : ""}`}
        >
          <Link onClick={() => setActiveMenu("dashboard")} to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li
          className={`menu-item ${
            activeMenu === "performance" ? "active" : ""
          }`}
        >
          <Link onClick={() => setActiveMenu("performance")} to="/performance">
            Performance
          </Link>
        </li>
      </ul>
    </div>
  );
}
