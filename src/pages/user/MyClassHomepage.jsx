import React from "react";
import { Link } from "react-router-dom";
import FilterClass from "../../components/user/FilterClass";
import ListCourse from "../../components/user/ListCourse";

function MyClassHomepage() {
  return (
    <>
      <div
        style={{ backgroundColor: "#EBF3FC", marginTop:"3.8em" }}
        className="d-flex flex-column align-items-center w-100"
      >
        <div className="m-5">
          <div className="container d-flex">
            <h6 className="">Kelas Berjalan</h6>
            <input
              className="form-control "
              type="search"
              placeholder="Cari Kursus terbaik"
              aria-label="Search"
            />
          </div>
          <div className="container d-flex mt-3">
            <FilterClass />
            <div
              className="btn-menu d-flex flex-column"
              style={{ marginLeft: "5em" }}
            >
              <div className="d-flex justify-content-between">
                <button className="btn btn-light" style={{ width: "20%" }}>
                  All
                </button>
                <button className="btn btn-light " style={{ width: "40%" }}>
                  In Progress
                </button>
                <button className="btn btn-light " style={{ width: "30%" }}>
                  Selesai
                </button>
              </div>
              <div className="mt-3">
                <div className="mt-3">
                  <ListCourse />
                </div>
              </div>
              <div className="mt-3">
                <Link to={"/premiumClass"} className="btn btn-warning">
                  Move to Premium Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyClassHomepage;
