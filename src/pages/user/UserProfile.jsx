import React from "react";
import SidebarProfile from "../../components/user/SidebarProfile";
import { Link, Outlet } from "react-router-dom";


function UserProfile() {
  return (
    <>
      <div
        className="card mx-3 bg-primary-subtle d-flex flex-row justify-content-between align-items-center "
        style={{ marginTop: "5em" }}
      >
        <SidebarProfile />
        <div className="p-4 w-100">
          <Outlet />
        </div>
      </div>
    <Link to={"/notification"} className="btn btn-warning m-3"> notifikasi</Link>
    </>
  );
}

export default UserProfile;
