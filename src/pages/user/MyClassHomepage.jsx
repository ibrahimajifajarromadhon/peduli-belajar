import React, { useState } from "react";
import FilterClass from "../../components/user/FilterClass";
import ListMyCourse from "../../components/user/ListMyCourse";
import { CiFilter } from "react-icons/ci";

function MyClassHomepage() {
  const [progressButton, setProgressButton] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (data) => {
    setFilteredData(data);
  };
  console.log(filteredData);

  return (
    <div style={{ backgroundColor: "#EBF3FC", marginTop: "4em" }}>
      <div className="container">
        <div className="topic d-flex">
          <h4 className="mt-5" style={{ fontWeight: "700" }}>
            Kelas Berjalan{" "}
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
              <FilterClass onFilter={handleFilter}/>
            </div>
          </div>
          <div className="col-md-8">
            <div className="btn-menu d-flex mt-4">
                <button
                  className={`btn btn-light me-4 ${ progressButton === "all" ? "active" : ""}`}
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
              <ListMyCourse progressButton={progressButton} listMyCourse={filteredData}/>
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
