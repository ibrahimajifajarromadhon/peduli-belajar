import React from "react";
import SearchIcon from "../assets/bx_search-alt.svg"; // Ganti dengan path yang sesuai

function NavbarWithSvgSearch() {
  
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
      <a className="navbar-brand" style={{ marginLeft: "50px" }}>Hey,Admin</a> 
        <form className="d-flex" role="search" style={{ position: "relative" }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Cari"
            aria-label="Search"
            style={{ paddingRight: "40px" }} 
          />
          <img
            src={SearchIcon}
            alt="Search Icon"
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "24px",
              height: "24px",
              backgroundColor: "#6148FF", 
              borderRadius: "20%", 
              padding: "5px",

            }} 
          />
        </form>
      </div>
    </nav>
  );
}

export default NavbarWithSvgSearch;
