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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/api/course/filter?title=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data);
      navigate(`/allCourseClass?search=${searchQuery}`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (
    <>
      <div style={{ backgroundColor: "#EBF3FC", marginTop: "3em" }}>
        <div className="container">
          <div className="topic">
            <h4 className="mt-5" style={{ fontWeight: "700", fontFamily:"Montserrat" }}>
              Topik Kelas
            </h4>
            <form
              className="search-course d-flex"
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
              className="btn ms-auto"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
              style={{backgroundColor:"#6148FF", color:"#fff"}}
            >
              <CiFilter style={{width:"1.7em", height:"1.7em"}}/>
            </button>
          </div>
          <div className="row">
            <div className="col-md-4" style={{ marginBottom: "1em" }}>
              <div className="">
                <FilterClass onFilter={handleFilter}/>
              </div>
            </div>
            <div className="col-md-8" style={{ marginBottom: "2em" }}>
              <div className="btn-menu d-flex">
                <button
                  className={`btn me-4 ${
                    filter === "all" ? "active" : "nonaktive"
                  }`}
                  onClick={() => setFilter("all")}
                  style={{
                    width: "20%",
                    borderRadius: "15px",
                    fontWeight: "600",
                  }}
                >
                  All
                </button>
                <button
                  className={`btn me-4 ${
                    filter === "premium" ? "active" : "nonaktive"
                  }`}
                  onClick={() => setFilter("premium")}
                  style={{
                    width: "45%",
                    borderRadius: "15px",
                    fontWeight: "600",
                  }}
                >
                  Kelas Premium
                </button>
                <button
                  className={`btn ${
                    filter === "gratis" ? "active" : "nonaktive"
                  }`}
                  onClick={() => setFilter("gratis")}
                  style={{
                    width: "35%",
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

          .btn-menu .btn.nonaktive {
            background-color: #FFFFFF;
            color: #8A8A8A;
          }

          .topic .search-course {
            margin-top: 3em;
          }

          .btn-menu {
            margin-top: 2em;
          }

          .btn-menu .btn {
            padding: 10px;
          }

          .topic {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          @media (max-width: 768px) {
            .btn-menu .btn {
              padding: 7px;
            }
            
            .topic .form-control {
              display: none;
            }

            .topic .btn {
              display: block;
              height: 10%;
              margin-top: 30px;
            }
            
            .topic .search-course {
              margin-top: 0px;
            }
            
            .search-course .search-icon {
              display: none;
            }

            .btn-menu {
              margin-top: 0px;
            }

          }
        `}
        </style>
      </div>
    </>
  );
};

export default AllCourseHomepage;
