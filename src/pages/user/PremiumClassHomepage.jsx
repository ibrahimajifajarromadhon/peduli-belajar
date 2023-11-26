import React from "react";
import { Link } from "react-router-dom";
import FilterClass from "../../components/user/FilterClass";
import ListCoursePremium from "../../components/user/ListCoursePremium";

function PremiumClassHomepage() {
  return (
    <>
      <div
        style={{ backgroundColor: "#EBF3FC",  marginTop:"3.8em" }}
        className="d-flex flex-column align-items-center w-100"
      >
        <div className="m-5">
          <div className="container d-flex">
            <h6 className="">Topik Kelas</h6>
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
                  Kelas Premium
                </button>
                <button className="btn btn-light " style={{ width: "30%" }}>
                  Kelas Gratis
                </button>
              </div>
              <div className="mt-3">
                <div className="mt-3">
                  <ListCoursePremium />
                </div>
              </div>
              <div className="mt-3">
                <Link to={"/myclass"} className="btn btn-danger">
                  Back to my class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PremiumClassHomepage;
