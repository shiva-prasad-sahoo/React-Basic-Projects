import React from "react";
import Stats from "../Pages/Stats";
import Messages from "../Pages/Messages";
import { NavLink } from "react-router-dom";
import Settings from "../Pages/Settings";

function Sidebar() {
  return (
    <div>
      <aside style={{ padding: "1rem", width: "200px", background: "#eee" }}>
        <h3>Admin Panel</h3>
        <NavLink to="stats">📊 Stats</NavLink>
        <br />
        <NavLink to="messages">✉️ Messages</NavLink>
        <br />
        <NavLink to="settings">Settings</NavLink>
      </aside>
    </div>
  );
}

export default Sidebar;
