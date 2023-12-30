import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import Cookies from "js-cookie";
import SearchIcon from "../../assets/bx_search-alt.svg";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const [profilePicture, setProfilePicture] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (Cookies.get("token")) {
      setIsLoggedIn(true);
    }
    axios
      .get(`${import.meta.env.VITE_API}/api/user`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        setProfilePicture(response.data.data.profilePictureUrl);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  }, []);

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/api/course/filter?title=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data);
      if (location.pathname === "/welcome") {
        navigate(`/welcome?search=${searchQuery}`);
      } else if (location.pathname === "/allCourseClass") {
        navigate(`/allCourseClass?search=${searchQuery}`);
      } else {
        navigate(`/myClass?search=${searchQuery}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#6148FF", color: "white", padding: "10px" }}
    >
      <div className="container">
        <Link to={`/welcome`} style={{ textDecoration: "none", color: "#fff" }}>
          <b
            className="navbar-brand"
            href="#"
            style={{
              color: "white",
              marginRight: "50px",
              fontFamily: "Montserrat",
            }}
          >
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
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarSupportedContent">
          <form
            className="search-class d-flex"
            role="search"
            style={{ position: "relative", minWidth: "200px" }}
          >
            <input
              className="form-control me-2 d-md-block"
              type="search"
              placeholder="Cari Kelas..."
              aria-label="Search"
              style={{
                paddingRight: "50px",
                height: "3.1em",
                borderRadius: "16px",
                fontFamily: "Montserrat",
                fontWeight: "400",
                border: "transparent",
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img
              className="search-icon"
              src={SearchIcon}
              alt="Search Icon"
              onClick={handleSubmit}
              style={{
                position: "absolute",
                top: "82%",
                transform: "translateY(-100%)",
                width: "2em",
                height: "2em",
                backgroundColor: `var(--primary-purple)`,
                borderRadius: "12px",
                padding: "5px",
                cursor: "pointer",
              }}
            />
          </form>
          <div className="menu-nav ms-auto">
            {isLoggedIn ? (
              <div className="d-flex align-items-center">
                <div className="dropdown me-4">
                  <Link
                    to={`/myClass`}
                    className="dropdown-toggle"
                    id="myClassDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  >
                    <FaChalkboardTeacher className="icon" />
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="myClassDropdown"
                  >
                    <li>
                      <Link
                        to={`/myClass`}
                        className="dropdown-item"
                        style={{ color: "white" }}
                      >
                        My Class
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/allCourseClass`}
                        className="dropdown-item"
                        style={{ color: "white" }}
                      >
                        All Course Class
                      </Link>
                    </li>
                  </ul>
                </div>

                <Link to={`/notification`} style={{ color: "white" }}>
                  <FaBell className="icon me-4" />
                </Link>
                <Link to={`/userProfile`} style={{ color: "white" }}>
                  {profilePicture && (
                    <div
                      style={{
                        width: "3em",
                        height: "3em",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "2px solid #fff",
                        backgroundColor: "#fff",
                      }}
                    >
                      <img
                        src={profilePicture}
                        alt="Profile"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  )}
                </Link>
              </div>
            ) : (
              <Link to={`/login`}>
                <button
                  className="btn btn-transparant me-3"
                  style={{
                    color: "white",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    marginTop: "5px",
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

        .search-class .form-control {
          width: auto;
        }

        .search-class {
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .search-icon {
          left: 13.5em;
        }
      }

      @media (min-width: 769px) {
        .search-class .form-control {
          width: 30em;
        }

        .search-icon {
          right: 20px;

        }
      }

      .dropdown-menu {
        background-color: #6148FF;
        font-family: Montserrat;
        font-size: 15px;
      }

      .dropdown-menu:hover .dropdown-item:hover {
        background-color: #4c3eb4;
        color: white;
        font-family: Montserrat;
        font-size: 15px;
      }

    `}
      </style>
    </nav>
  );
}

export default Header;
