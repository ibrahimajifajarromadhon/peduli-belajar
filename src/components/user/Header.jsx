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
        </div>
        <div className="d-flex flex-row gap-3">
        <Link to={"/"} className="btn btn-success">
          Masuk User
        </Link>
        <Link to={"/admin"} className="btn btn-warning">
          Masuk Admin
        </Link>
      </div>
      </div>
    </nav>
  );
}

export default Header;
