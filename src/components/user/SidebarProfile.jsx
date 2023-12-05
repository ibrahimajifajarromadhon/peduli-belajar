import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";

function SidebarProfile() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className="d-flex flex-column w-100 p-4 gap-2">
      <NavLink
        to="myProfile"
        className={`d-flex gap-3 sidebar-link ${
          activeLink === "/myProfile" ? "active-link" : ""
        }`}
      >
        <span>
          <CiEdit />
        </span>
        <p>Profile Saya</p>
      </NavLink>
      <hr />
      <NavLink
        to="changePassword"
        className={`d-flex gap-3 sidebar-link ${
          activeLink === "/changePassword" ? "active-link" : ""
        }`}
      >
        <span>
          <IoSettingsOutline />
        </span>
        <p>Ubah Password</p>
      </NavLink>
      <hr />
      <NavLink
        to="paymentHistory"
        className={`d-flex gap-3 sidebar-link ${
          activeLink === "/paymentHistory" ? "active-link" : ""
        }`}
      >
        <span>
          <SlBasket />
        </span>
        <p>Riwayat Pembayaran</p>
      </NavLink>
      <hr />
      <NavLink
        exact
        to="/welcome"
        className={`d-flex gap-3 sidebar-link ${
          activeLink === "/welcome" ? "active-link" : ""
        }`}
      >
        <span>
          <FiLogOut />
        </span>
        <p>Keluar</p>
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
        font-weight: 500
      }
      p:hover {
        color: var(--primary-purple);
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
