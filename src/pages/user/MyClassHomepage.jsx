import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import FilterMyClass from "../../components/user/FilterMyClass";
import ListMyCourse from "../../components/user/ListMyCourse";
import SearchIcon from "../../assets/bx_search-alt.svg";
import Cookies from "js-cookie";

function MyClassHomepage() {
  const [progressButton, setProgressButton] = useState("all");
  const [filteredMyClass, setFilteredMyClass] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleFilter = (data) => {
    setFilteredMyClass(data);
  };
  console.log(filteredMyClass);
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const token = Cookies.get("token")

    const header = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/api/course/my-course?title=${searchQuery}`,
        {
          method: "GET",
          headers: header,
        }
      );

      const data = await response.json();
      console.log(data);
      setSearchResults(data);
      navigate(`/myClass?search=${searchQuery}`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setSearchResults();
  });

  return (
    <div style={{ backgroundColor: "#EBF3FC", marginTop: "4em" }}>
      <div className="container">
        <div className="topic d-flex justify-content-between">
          <h4
            className="mt-5"
            style={{ fontWeight: "700", fontFamily: "Montserrat" }}
          >
            Kelas Berjalan{" "}
          </h4>
          <form
            className="search-course d-flex mt-5"
            role="search"
            style={{ position: "relative", minWidth: "200px" }}
          >
            <input
              className="form-control me-2 d-none d-md-block"
              type="search"
              placeholder="Cari Kelas..."
              aria-label="Search"
              style={{
                paddingRight: "50px",
                height: "3.1em",
                width: "100%",
                borderRadius: "16px",
                fontFamily: "Montserrat",
                fontWeight: "400",
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
                right: "20px",
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
          </form>{" "}
          <button
            className="btn btn-primary ms-auto mt-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
          >
            {/* <CiFilter setProgressButton={setProgressButton}/> */}
            <CiFilter />
          </button>
        </div>
        <div className="row">
          <div
            className="col-md-4 filter-course"
            style={{ marginBottom: "2em" }}
          >
            <div className="mt-4">
              <FilterMyClass onFilter={handleFilter} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="btn-menu d-flex mt-4">
              <button
                className={`btn btn-light me-4 ${
                  progressButton === "all" ? "active" : ""
                }`}
                onClick={() => setProgressButton("all")}
                style={{
                  width: "20%",
                  padding: "10px",
                  borderRadius: "15px",
                  fontWeight: "600",
                }}
              >
                All
              </button>
              <button
                className={`btn btn-light me-4 ${
                  progressButton === "in_progress" ? "active" : ""
                }`}
                onClick={() => setProgressButton("in_progress")}
                style={{
                  width: "40%",
                  padding: "10px",
                  borderRadius: "15px",
                  fontWeight: "600",
                }}
              >
                In Progress
              </button>
              <button
                className={`btn btn-light me-4 ${
                  progressButton === "done" ? "active" : ""
                }`}
                onClick={() => setProgressButton("done")}
                style={{
                  width: "30%",
                  padding: "10px",
                  borderRadius: "15px",
                  fontWeight: "600",
                }}
              >
                Done
              </button>
            </div>
            <div className="mt-3">
              <ListMyCourse
                progressButton={progressButton}
                listMyCourse={filteredMyClass}
              />
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
      .topic .btn {
        display: none;
      }

      .btn-menu .btn.active {
        background-color: #6148ff;
        color: white;
      }

      @media (max-width: 576px) {
        .topic .form-control {
          display: none;
        }

        .topic .btn {
          display: block;
          height: 10%;
          }

        .search-course .search-icon {
          display: none;
        }
      }
      
      `}
      </style>
    </div>
  );
}

export default MyClassHomepage;
