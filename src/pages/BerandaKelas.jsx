import React from "react";
import FilterKelas from "../components/FilterKelas";
import ListCourse from "../components/ListCourse";
import ListCoursePremium from "../components/ListCoursePremium";

const BerandaKelas = () => {
  return (
    <>
      <div style={{ backgroundColor: "#EBF3FC" }}>
        <div className="d-flex title ">
          <h6 className="mt-5">Topik Kelas</h6>
          <input
            className="form-control ms-auto mt-5"
            type="search"
            placeholder="Cari Kursus terbaik"
            aria-label="Search"
          />
        </div>
        <div className="container d-flex mt-3">
          <FilterKelas />
          <div className="btn-menu">
            <button className="btn btn-light me-3">All</button>
            <button className="btn btn-light me-3">Kelas Premium</button>
            <button className="btn btn-light me-3">Kelas Gratis</button>
            <div className="mt-3">
              <ListCourse />
              <div className="mt-3">
                <ListCoursePremium/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BerandaKelas;
