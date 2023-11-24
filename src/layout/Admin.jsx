import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SidebarAdmin from "../components/SidebarAdmin";
import NavbarAdmin from "../components/NavbarAdmin";

function Admin() {
  return (
    <div className="d-flex flex-row vw-100 vh-100">
      <SidebarAdmin />
      <div className="d-flex flex-column w-100 h-100">
        <NavbarAdmin />
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
