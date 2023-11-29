import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#6148FF", color: "white", padding: "10px" }}
    >
      <div className="container">
        <b className="navbar-brand" href="#" style={{ color: "white", marginRight:"50px" }}>
          Peduli Belajar
        </b>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <div className="input-group" style={{width:"480px"}}>
              <input
                className="form-control"
                type="search"
                placeholder="Cari Kursus Terbaik"
                aria-label="Search"
                style={{ padding: "10px"}}
              />
              <button className="btn btn-primary" type="submit">
                <FaSearch className="icon" />
              </button>
            </div>
          </form>
          <div className="menu-nav ms-auto">
            <Link to={`/login`}>
              <button
                className="btn btn-transparant me-3"
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                }}
              >
                <MdOutlineLogin style={{ marginRight: "1px" }} /> Masuk{" "}
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="d-flex flex-row gap-3">
        <Link to={"/"} className="btn btn-success">
          Masuk User
        </Link>
        <Link to={"/admin"} className="btn btn-warning">
          Masuk Admin
        </Link>
        </div> */}
      </div>
      <style>
    {`
      @media (max-width: 768px) {
        .input-group {
          max-width: 50%;
        }
      }
    `}
  </style>
    </nav>
  );
}

export default Header;
