import React, { useState } from "react";
import ListAllCourse from "../../components/user/ListAllCourse";
// import { Link } from "react-router-dom";
import FilterClass from "../../components/user/FilterClass";
import { CiFilter } from "react-icons/ci";

const AllCourseHomepage = () => {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <div style={{ backgroundColor: "#EBF3FC", marginTop: "4em" }}>
        <div className="container">
          <div className="topic d-flex">
            <h4 className="mt-5" style={{ fontWeight: "700" }}>
              Topik Kelas{" "}
            </h4>
            <input
              className="form-control ms-auto mt-5"
              placeholder="Cari Kelas"
              type="search"
              style={{
                width: "20%",
                padding: "10px",
                borderRadius: "15px",
                borderColor: "#6148FF",
              }}
            />
            <button
              className="btn btn-primary ms-auto mt-5"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            >
              <CiFilter  setFilter={setFilter}/>
            </button>
          </div>
          <div className="row">
            <div className="col-md-4" style={{ marginBottom: "2em" }}>
              <div className="mt-4">
                <FilterClass setFilter={setFilter} />
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
                <ListAllCourse filter={filter} />
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
          }
        `}
        </style>
      </div>
    </>
  );
};

export default AllCourseHomepage;
