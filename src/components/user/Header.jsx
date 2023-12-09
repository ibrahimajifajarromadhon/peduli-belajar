import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBell, FaChalkboardTeacher, FaUser } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  useEffect (() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true)
    }
  })

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#6148FF", color: "white", padding: "10px" }}
    >
      <div className="container">
        <Link to={`/welcome`} style={{ textDecoration: "none", color: "#fff" }}>
          <b className="navbar-brand" href="#" style={{ color: "white", marginRight: "50px" }}>
            Peduli Belajar
          </b>
        </Link>
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
            <div className="input-group" style={{ width: "480px" }}>
              <input
                className="form-control"
                type="search"
                placeholder="Cari Kursus Terbaik"
                aria-label="Search"
                style={{ padding: "10px" }}
              />
              <button className="btn btn-primary" type="submit">
                <FaSearch className="icon" />
              </button>
            </div>
          </form>
          <div className="menu-nav ms-auto">
            {isLoggedIn ? (
              <div className="d-flex align-items-center">
                <Link to={`/myClass`} style={{color:"white"}}>
                <FaChalkboardTeacher className="icon me-4" /> 
                </Link>
                <Link to={`/notification`} style={{color:"white"}}>
                <FaBell className="icon me-4" />
                </Link>
                <Link to={`/userProfile`} style={{color:"white"}}>
                <FaUser className="icon me-2" />
                </Link>
                <button
                  className="btn btn-transparant me-3"
                  style={{
                    color: "white",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    marginTop:"5px"
                  }}
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                    return navigate("/");
                  }} 
                > 
                <MdOutlineLogin style={{ marginRight: "1px" }} /> Keluar{" "}
                </button>
              </div>
            ) : (
              <Link to={`/login`}>
                <button
                  className="btn btn-transparant me-3"
                  style={{
                    color: "white",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    marginTop:"5px"
                  }}
                >
                  <MdOutlineLogin style={{ marginRight: "1px" }} /> Masuk{" "}
                </button>
              </Link>
            )}
          </div>
        </div>
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
