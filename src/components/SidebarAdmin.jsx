import React from "react";
import { NavLink } from "react-router-dom";


function SidebarAdmin() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark p-4 h-100 position-absolute">
      <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">PeduliBelajar</span>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="dashboard" className="nav-link" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="class" className="nav-link" activeClassName="active">
            Kelola Kelas
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SidebarAdmin;
