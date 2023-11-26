import React from "react";
import AuthImage from "../components/AuthImage";
import { Outlet } from "react-router-dom";

function Authenticaton() {
  return (
    <div className="d-flex vh-100">
      <div
        className="contain d-flex justify-content-center align-items-center"
        style={{ width: "100%" }}
      >
        <Outlet />
      </div>
      <div
        className="image d-lg-flex d-none justify-content-center align-items-center"
        style={{ width: "50%", backgroundColor: `var(--primary-purple)` }}
      >
        <div className="d-flex justify-content-center w-100">
          <AuthImage />
        </div>
      </div>
    </div>
  );
}

export default Authenticaton;
