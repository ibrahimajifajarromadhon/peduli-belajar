import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";
import Cookies from "js-cookie";

function SidebarProfile() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  
  const handleLogout = () => {
    Cookies.remove('yourTokenName'); 
    if (Cookies.remove('token')) {
      navigate('/login'); 
    }
  };
  return (
    <div className="d-flex flex-column w-100 p-4 gap-2">
      <NavLink
        to="myProfile"
        className={`d-flex gap-3 sidebar-link ${
          activeLink === "/myProfile" ? "active-link" : ""
        }`}
      >
        <span>
          <CiEdit style={{width:"1.3em", height:"1.3em"}} />
        </span>
        <p className="sidebar">Profile Saya</p>
      </NavLink>
      <hr />
      <NavLink
        to="changePassword"
        className={`d-flex gap-3 sidebar-link ${
          activeLink === "/changePassword" ? "active-link" : ""
        }`}
      >
        <span>
          <IoSettingsOutline style={{width:"1.3em", height:"1.3em"}} />
        </span>
        <p className="sidebar">Ubah Password</p>
      </NavLink>
      <hr />
      <NavLink
        to="paymentHistory"
        className={`d-flex gap-3 sidebar-link ${
          activeLink === "/paymentHistory" ? "active-link" : ""
        }`}
      >
        <span>
          <SlBasket style={{width:"1.3em", height:"1.3em"}} />
        </span>
        <p className="sidebar">Riwayat Pembayaran</p>
      </NavLink>
      <hr />
      <NavLink
        exact
        to="/welcome"
        className={`d-flex gap-3 sidebar-link ${
          activeLink === "/welcome" ? "active-link" : ""
        }`}
        onClick={handleLogout}
      >
        <span>
          <FiLogOut style={{width:"1.3em", height:"1.3em"}} />
        </span>
        <p className="sidebar">Keluar</p>
      </NavLink>
      <hr />

      <style>{`
      .sidebar-link {
        text-decoration: none;
        color: black; 
      }

      span {
        font-size: 1.5em;
        color: var(--primary-purple);
      }

      p {
        margin: auto 0px;
      }

      .sidebar {
        margin: auto 0px;
        transition: transform .3s;
        font-weight: 600
      }

      .sidebar:hover {
        color: var(--primary-purple);
        transform: scale(1.1);
        font-weight: 700
      }

      hr {
        margin-bottom: 1px; 
        color: var(--primary-purple);
      }

      `}</style>
    </div>
  );
}

export default SidebarProfile;
