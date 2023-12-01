// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import { CiEdit } from "react-icons/ci";
// import { IoSettingsOutline } from "react-icons/io5";
// import { SlBasket } from "react-icons/sl";
// import { FiLogOut } from "react-icons/fi";

// function SidebarProfile() {
//   return (
//     <div className='d-flex flex-column w-100 p-4 gap-2'>
//   <NavLink to="myProfile" className='d-flex gap-4' activeClassName="active-link" style={{ textDecoration: "none", color: "black" }}>
//     <span><CiEdit /></span>Profile saya
//   </NavLink>
//   <hr />
//   <NavLink to="changePassword" className='d-flex gap-4' activeClassName="active-link" style={{ textDecoration: "none", color: "black" }}>
//     <span><IoSettingsOutline /></span>Ubah password
//   </NavLink>
//   <hr />
//   <NavLink to="paymentHistory" className='d-flex gap-4' activeClassName="active-link" style={{ textDecoration: "none", color: "black" }}>
//     <span><SlBasket /></span>Riwayat Pembayaran
//   </NavLink>
//   <hr />
//   <NavLink exact to="/welcome" className='d-flex gap-4' activeClassName="active-link" style={{ textDecoration: "none", color: "black" }}>
//     <span><FiLogOut /></span>Keluar
//   </NavLink>
// </div>
//   )
// }

// export default SidebarProfile;
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
        className={`d-flex gap-4 sidebar-link ${
          activeLink === "/myProfile" ? "active-link" : ""
        }`}
      >
        <span>
          <CiEdit />
        </span>
        Profile saya
      </NavLink>
      <hr />
      <NavLink
        to="changePassword"
        className={`d-flex gap-4 sidebar-link ${
          activeLink === "/changePassword" ? "active-link" : ""
        }`}
      >
        <span>
          <IoSettingsOutline />
        </span>
        Ubah password
      </NavLink>
      <hr />
      <NavLink
        to="paymentHistory"
        className={`d-flex gap-4 sidebar-link ${
          activeLink === "/paymentHistory" ? "active-link" : ""
        }`}
      >
        <span>
          <SlBasket />
        </span>
        Riwayat Pembayaran
      </NavLink>
      <hr />
      <NavLink
        exact
        to="/welcome"
        className={`d-flex gap-4 sidebar-link ${
          activeLink === "/welcome" ? "active-link" : ""
        }`}
      >
        <span>
          <FiLogOut />
        </span>
        Keluar
      </NavLink>

      <style>{`
      /* styles.css atau di file CSS global */
      .sidebar-link {
        text-decoration: none;
        color: black; /* atau warna lain yang diinginkan */
      }
      
      .sidebar-link .active-link {
        color: var(--primary-purple);
      }
      

      `}</style>
    </div>
  );
}

export default SidebarProfile;
