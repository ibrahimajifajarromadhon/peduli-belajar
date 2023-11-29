import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
// import "../../style/HeaderResponsive.css"

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#6148FF", color: "white", padding: "10px" }}
    >
      <div className="container">
        <b className="navbar-brand" href="#" style={{ color: "white" }}>
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
          <div className="input-group">
            <input
              className="form-control"
              type="search"
              placeholder="Cari Kursus Terbaik"
              aria-label="Search"
              style={{ width: "526px", padding: "7px", marginLeft: "30px" }}
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
        {/* <div className="mobile-nav">
          <FaRegBell className="icon me-3" />
          <FaRegUser className="icon me-3" />
        </div> */}
        <div className="nav-nav d-flex flex-row gap-3">
          <Link to={"/"} className="btn btn-success">
            Masuk User
          </Link>
          <Link to={"/admin"} className="btn btn-warning">
            Masuk Admin
          </Link>
        </div>
       </div>
      </div>

      {/* <style>
        {`
          .mobile-nav {
            display: none;
            margin-left: 100px;
          }

          @media only screen and (max-width: 800px) {
              .menu-nav {
                display: none;
              }
              .mobile-nav {
                  display: block;
                  position: fixed;
                  bottom: 0;
                  left: 0;
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                  width: 100%;
                  padding: 10px;
                  color: #8A8A8A;
                  background-color: #FFFFFF;
              }
                .nav-nav .btn {
                  display: none;
                }
          }
          `}
      </style> */}
    </nav>
  );
}

export default Header;
