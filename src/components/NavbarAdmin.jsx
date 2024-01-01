import React from "react";
import { IoSearch } from "react-icons/io5";

function NavbarAdmin() {
  return (
    <nav
      className="navbar w-100"
      style={{
        backgroundColor: `var(--primary-young-blue)`,
        fontFamily: "Montserrat",
      }}
    >
      <div className="container d-flex justify-content-between">
        <form
          className="d-flex"
          role="search"
          style={{ position: "relative", width: "100%" }}
          method="get"
        >
          <input
            id="pencarian"
            type="search"
            className="form-control me-2 "
            placeholder="Cari"
            aria-label="Search"
            style={{
              height: "3em",
              width: "100%",
              fontFamily: "Montserrat",
              fontWeight: "400",
              borderRadius: "15px",
            }}
            name="q"
          />
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: `var(--primary-purple)` }}
          >
            <IoSearch className="text-light fs-2" />
          </button>
        </form>
      </div>
      <style>{`
      @media only screen and (max-width: 800px) {
      }
      `}</style>
    </nav>
  );
}

export default NavbarAdmin;
