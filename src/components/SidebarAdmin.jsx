import React from "react";
import { NavLink } from "react-router-dom";
import { SiStudyverse } from "react-icons/si";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineProfile } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function SidebarAdmin() {
  return (
    <>
      <div
        className="d-lg-flex flex-column flex-shrink-0 p-3  p-4 vh-100 d-none"
        style={{ backgroundColor: `var(--primary-purple)`, width: "300px" }}
      >
        <NavLink
          to="dashboard"
          className="d-flex align-items-center  text-white text-decoration-none"
        >
          <span className="fs-2 d-flex justify-content-start">
            <SiStudyverse />
          </span>
          <span className="fs-4 mx-5">PeduliBelajar</span>
        </NavLink>
        <br />
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to="dashboard"
              className="nav-link text-light fs-5 d-flex align-items-center"
              activeClassName="active"
            >
              <LuLayoutDashboard />
              <span className="mx-3">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="class"
              className="nav-link text-light fs-5 d-flex align-items-center mb-5"
              activeClassName="active"
            >
              <AiOutlineProfile />
              <span className="mx-3">Kelola Kelas</span>
            </NavLink>
          </li>
          <li className="nav-item rounded">
          <Link to={`/loginAdmin`} style={{ color: `var(--primary-purple)`}} onClick={() => {Cookies.remove('token')}}>
            <a href="#" className="nav-link text-white fs-5">
              <FiLogOut />
              <span className="mx-3">Log Out</span>
            </a>
          </Link>
          </li>
        </ul>
      </div>

      <div className="d-flex flex-row bg-transparant  z-1  p-4 d-lg-none" style={{ top:"0px", left:"0px"}}>
        <ul className="nav nav-pills mb-auto">
          <li className="nav-item">
            <NavLink
              to="dashboard"
              className="nav-link fs-5 d-flex align-items-center"
              activeClassName="active"
            >
              <LuLayoutDashboard className="text-dark" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="class"
              className="nav-link text-light fs-5 d-flex align-items-center "
              activeClassName="active"
            >
              <AiOutlineProfile className="text-dark" />
            </NavLink>
          </li>
          {/* <li className="nav-item rounded">
            <a href="#" className="nav-link text-white fs-5">
              <FiLogOut className="text-danger"/>
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default SidebarAdmin;