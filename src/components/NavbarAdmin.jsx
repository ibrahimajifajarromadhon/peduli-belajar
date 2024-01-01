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
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <h4 className="admin d-lg-flex fw-bold" style={{color:`var(--primary-purple)`}}>Hallo Admin</h4>
        </div>
        <form
          className="d-flex"
          role="search"
          style={{ position: "relative" }}
          method="get"
        >
          <input
            id="pencarian"
            type="search"
            className="cari form-control me-2 "
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
      @media only screen and (max-width: 682px) {
        .admin {
          display: none;
        }
        form{
          width: 100%;
        }

      }
      `}</style>
    </nav>
  );
}

export default NavbarAdmin;
