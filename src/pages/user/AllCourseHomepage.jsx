import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListAllCourse from "../../components/user/ListAllCourse";
import FilterClass from "../../components/user/FilterClass";
import { CiFilter } from "react-icons/ci";
import SearchIcon from "../../assets/bx_search-alt.svg";

const AllCourseHomepage = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (data) => {
    setFilteredData(data);
  };
  console.log(filteredData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/api/course/filter?title=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data);
      navigate(`/allCourseClass?search=${searchQuery}`);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (
    <>
      <div style={{ backgroundColor: "#EBF3FC", marginTop: "4em" }}>
        <div className="container">
          <div className="topic d-flex justify-content-between">
            <h4 className="mt-5" style={{ fontWeight: "700", fontFamily:"Montserrat" }}>
              Topik Kelas{" "}
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
            </form>
            <button
              className="btn btn-primary ms-auto mt-5"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            >
              <CiFilter />
            </button>
          </div>
          <div className="row">
            <div className="col-md-4" style={{ marginBottom: "2em" }}>
              <div className="mt-4">
                <FilterClass onFilter={handleFilter}/>
              </div>
            </div>
            <div className="col-md-8" style={{ marginBottom: "2em" }}>
              <div className="btn-menu d-flex mt-4">
                <button
                  className={`btn btn-light me-4 ${
                    filter === "all" ? "active" : ""
                  }`}
                  onClick={() => setFilter("all")}
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
                    filter === "premium" ? "active" : ""
                  }`}
                  onClick={() => setFilter("premium")}
                  style={{
                    width: "40%",
                    padding: "10px",
                    borderRadius: "15px",
                    fontWeight: "600",
                  }}
                >
                  Kelas Premium
                </button>
                <button
                  className={`btn btn-light me-4 ${
                    filter === "gratis" ? "active" : ""
                  }`}
                  onClick={() => setFilter("gratis")}
                  style={{
                    width: "30%",
                    padding: "10px",
                    borderRadius: "15px",
                    fontWeight: "600",
                  }}
                >
                  Kelas Gratis
                </button>
              </div>
              <div className="mt-3">
                <ListAllCourse filter={filter} listCourses={filteredData} />
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

          @media (max-width: 768px) {
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
    </>
  );
};

export default AllCourseHomepage;
