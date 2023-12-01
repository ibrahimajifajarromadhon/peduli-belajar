import React from "react";
import SidebarProfile from "../../components/user/SidebarProfile";
import { Link, Outlet } from "react-router-dom";

function UserProfile() {
  return (
    <>
      <div className="d-flex flex-column justify-content-between align-items-center ">
        <div
          style={{ marginTop: "5em", width: "70%", border:"1px solid var(--primary-purple)" }}
          className="card d-flex flex-column  align-items-center"
        >
          <div style={{backgroundColor:`var(--primary-purple)`}} className="w-100 rounded-top-2 d-flex justify-content-center h-100 align-items-center m-0">
            <p className="m-2 text-light" style={{fontWeight:"bold"}}>AKUN</p>
          </div>
          <div className="d-flex flex-lg-row flex-column align-items-center w-100">
            <SidebarProfile />
            <div className="p-4 w-100 d-flex justify-content-center align-items-center w-100">
              <Outlet />
            </div>
          </div>
        </div>
        <Link to={"/notification"} className="btn btn-warning m-3">
          {" "}
          notifikasi
        </Link>
      </div>
    </>
  );
}

export default UserProfile;
