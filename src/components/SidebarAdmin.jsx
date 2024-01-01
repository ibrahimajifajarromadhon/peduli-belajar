import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineProfile } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { BsList } from "react-icons/bs";
import Cookies from "js-cookie";
import LogoImage from "../assets/logo.png";

function SidebarAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("token")) {
      setIsLoggedIn(true);
    }
  },[]);
  
  return (
    <>
      <div
        className="looked d-lg-flex flex-column flex-shrink-0 p-4"
        style={{ backgroundColor: `var(--primary-purple)`, width: "20%" }}
      >
        <NavLink
          to="dashboard"
          className="d-flex align-items-center text-white text-decoration-none sidebar"
        >
          <span className="image fs-2 d-flex justify-content-start">
            <img src={LogoImage} style={{width:"3.5rem"}} />
          </span>
          <span className="logo mx-2 my-3">Peduli Belajar</span>
        </NavLink>
        <br />
        <ul className="nav nav-pills flex-column sidebar-item mt-1">
          <li className="nav-item py-1">
            <NavLink
              to={`/admin/dashboard`}
              className="nav-link text-light d-flex align-items-center"
              activeclassname="active"
            >
              <LuLayoutDashboard />
              <span className="mx-3">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item py-1">
            <NavLink
              to="class"
              className="nav-link text-light d-flex align-items-center"
              activeclassname="active"
            >
              <AiOutlineProfile />
              <span className="mx-3">Kelola Kelas</span>
            </NavLink>
          </li>
          <li className="nav-item rounded py-1">
            <Link
              to={`/login`}
              style={{ color: `var(--primary-purple)` }}
              onClick={() => {
                Cookies.remove("token");
                setIsLoggedIn(false);
                toast.success("Logout berhasil!", {
                  style: {
                    fontFamily: 'Montserrat'
                  },
                });
                return navigate("/");
              }}
            >
              <p href="#" className="nav-link text-white">
                <FiLogOut />
                <span className="mx-3">Log Out</span>
              </p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="leftBarAdmin">
        <a
          className="btn btn-primary my-3 rounded-5"
          style={{ width: "10%", marginLeft: "-1rem" }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="sidebar"
        >
          <BsList className="text-light" />
        </a>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="sidebar"
          aria-labelledby="sidebarLabel"
          style={{ backgroundColor: `var(--primary-purple)`, width: "70%" }}
        >
          <div className="offcanvas-header">
            <NavLink
              to="dashboard"
              className="d-flex align-items-center text-white text-decoration-none sidebar"
            >
              <span className=" d-flex justify-content-start"><img src={LogoImage} style={{width:"2.5rem"}} /></span>
              <span className="mx-2 my-2">Peduli Belajar</span>
            </NavLink>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="nav nav-pills flex-column mb-auto sidebar-item mt-1">
              <li className="nav-item py-1">
                <NavLink
                  to={`/admin/dashboard`}
                  className="nav-link text-light  d-flex align-items-center"
                  activeClassName="active"
                >
                  <LuLayoutDashboard />
                  <span className="mx-3">Dashboard</span>
                </NavLink>
              </li>
              <li className="nav-item py-1">
                <NavLink
                  to="class"
                  className="nav-link text-light  d-flex align-items-center"
                  activeClassName="active"
                >
                  <AiOutlineProfile />
                  <span className="mx-3">Kelola Kelas</span>
                </NavLink>
              </li>
              <li className="nav-item rounded py-1">
                <Link
                  to={`/login`}
                  style={{ color: `var(--primary-purple)` }}
                  onClick={() => {
                    Cookies.remove("token");
                    setIsLoggedIn(false);
                    toast.success("Logout berhasil!", {
                      style: {
                        fontFamily: 'Montserrat'
                      },
                    });
                    return navigate("/");
                  }}
                >
                  <p href="#" className="nav-link text-white">
                    <FiLogOut />
                    <span className="mx-3">Log Out</span>
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style>{`
      .sidebar {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 700;
      }

      .sidebar-item {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 600;
        text-align: left;
      }
      .logo{
        font-size: 1.5em;
      }

      #sidebar{
        height: 100vh;
        overflow-y: auto;
      }

      @media (max-width: 990px) {
        .looked{
          display: none !important;
        }
      }

      @media (min-width: 991px) {
        .leftBarAdmin{
          display: none !important;
        }
      }
      `}</style>
    </>
  );
}

export default SidebarAdmin;
