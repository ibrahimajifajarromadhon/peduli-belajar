import React from "react";
import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/SidebarAdmin";
import NavbarAdmin from "../components/NavbarAdmin";

function Admin() {
  return (
    <div className="d-flex flex-column ">
      <NavbarAdmin />
      <div className="d-flex flex-row ">
        <SidebarAdmin />
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
