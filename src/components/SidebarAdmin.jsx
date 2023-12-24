import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SiStudyverse } from "react-icons/si";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineProfile } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function SidebarAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  useEffect (() => {

    if (Cookies.get('token')) {
      setIsLoggedIn(true)
    }
  })
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
              activeclassname="active"
            >
              <LuLayoutDashboard />
              <span className="mx-3">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="class"
              className="nav-link text-light fs-5 d-flex align-items-center mb-5"
              activeclassname="active"
            >
              <AiOutlineProfile />
              <span className="mx-3">Kelola Kelas</span>
            </NavLink>
          </li>
          <li className="nav-item rounded">
          <Link to={`/login`} style={{ color: `var(--primary-purple)`}} onClick={() => {Cookies.remove('token')}}>
            <p href="#" className="nav-link text-white fs-5">
              <FiLogOut />
              <span className="mx-3">Log Out</span>
            </p>
          </Link>
          </li>
        </ul>
      </div>

      <div className="d-flex flex-row bg-transparant w-100  z-1  p-4 d-lg-none" style={{ top:"0px", left:"0px"}}>
        <ul className="nav nav-pills mb-auto w-100">
          <li className="nav-item">
            <NavLink
              to="dashboard"
              className="nav-link fs-5 d-flex align-items-center"
              activeclassname="active"
            >
              <LuLayoutDashboard className="text-dark" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="class"
              className="nav-link text-light fs-5 d-flex align-items-center "
              activeclassname="active"
            >
              <AiOutlineProfile className="text-dark" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
            style={{}}
              to={`/login`}
              className="nav-link text-light fs-5 d-flex align-items-center "
              activeclassname="active"
              onClick={() => {
                Cookies.remove('token');
                setIsLoggedIn(false);
                toast.success("Logout berhasil!");
                return navigate("/");
              }} 
            >
              <FiLogOut className="text-danger" />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SidebarAdmin;