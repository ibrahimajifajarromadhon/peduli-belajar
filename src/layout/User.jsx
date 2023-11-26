import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/user/Header";

function User() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default User;
