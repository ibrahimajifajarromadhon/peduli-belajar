import React from "react";
import SidebarProfile from "../../components/user/SidebarProfile";
import { Link, Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function UserProfile() {
  return (
    <>
      <div
        className=""
        style={{
          backgroundColor: `var(--primary-young-blue)`,
          height: "150px",
          position: "absolute",
          width:"100%",
        }}
      ></div>
      <div className="d-flex flex-column justify-content-between align-items-center position-relative z-1" style={{marginTop:"4em"}}>
        <Link to={"/allCourseClass"} style={{marginTop: "2.5em", textDecoration:"none", color:`var(--primary-purple)`, fontSize:"16px", width:"78%", marginBottom:"1em", fontWeight:"700"}}><span style={{fontSize:"1.3em", marginRight:"1.5em"}}><FaArrowLeft/></span>Kembali ke Beranda</Link>
        <div
          style={{
            width: "70%",
            border: "1px solid var(--primary-purple)",
            marginBottom:"10em"
          }}
          className="card d-flex flex-column"
        >
          
          <div
            style={{ backgroundColor: `var(--primary-purple)`, height:"62px"}}
            className="w-100 rounded-top-2 d-flex justify-content-center align-items-center m-0"
          >
            <p className="m-2 text-light" style={{ fontWeight: "bold" }}>
              AKUN
            </p>
          </div>
          <div className="d-flex flex-lg-row flex-column align-items-start w-100">
            <SidebarProfile />
            <div className="p-4 w-100 d-flex justify-content-center align-items-center w-100">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
