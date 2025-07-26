import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "1rem", flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
