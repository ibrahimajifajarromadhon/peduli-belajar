import React from "react";
import SearchIcon from "../assets/bx_search-alt.svg"; 
import { NavLink } from "react-bootstrap";
import { SiStudyverse } from "react-icons/si";


function NavbarWithSvgSearch() {
  
  return (
    <nav className="navbar w-100"
    style={{backgroundColor: `var(--primary-young-blue)`, height: "100px"}}>
      <div className="container">
      <a className="navbar-brand" style={{ marginLeft: "50px", fontSize:"1.7em", fontWeight:"bold"}}>Hey,Admin</a> 
        <form className="d-flex" role="search" style={{ position: "relative" }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Cari"
            aria-label="Search"
            style={{ paddingRight: "40px", height : "3em", width:"350%" }} 
          />
          <img
            src={SearchIcon}
            alt="Search Icon"
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "2em",
              height: "2em",
              backgroundColor: `var(--primary-purple)`, 
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
