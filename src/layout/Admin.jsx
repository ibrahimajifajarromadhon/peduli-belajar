import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SidebarAdmin from "../components/SidebarAdmin";
import NavbarAdmin from "../components/NavbarAdmin";
import UsersActivity from "../components/UsersActivity";
import ButtonAddFilter from "../components/ButtonAddFilter";

function Admin() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderSmallScreen = () => (
    <div className="d-flex flex-column vw-100 vh-100">
      <NavbarAdmin />
      <SidebarAdmin />
      <UsersActivity />
      <div className="d-flex felx-column">
        <ButtonAddFilter />
        {/* <Outlet /> */}
      </div>
    </div>
  );

  const renderLargeScreen = () => (
    <div className="d-flex flex-row vw-100 vh-100">
      <SidebarAdmin />
      <div className="d-flex flex-column w-100 h-100">
        <NavbarAdmin />
        <UsersActivity />
        <ButtonAddFilter />
        {/* <Outlet /> */}
      </div>
    </div>
  );

  return <>{isSmallScreen ? renderSmallScreen() : renderLargeScreen()}</>;
}

export default Admin;
