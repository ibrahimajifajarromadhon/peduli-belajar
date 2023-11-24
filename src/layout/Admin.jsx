import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SidebarAdmin from "../components/SidebarAdmin";
import NavbarAdmin from "../components/NavbarAdmin";

function Admin() {
  return (
    <div className="d-flex flex-column ">
      <NavbarAdmin />
        <SidebarAdmin />
        <Outlet />
    </div>
  );
}

export default Admin;
