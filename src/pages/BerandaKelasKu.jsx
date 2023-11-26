import React from "react";
import FilterKelas from "../components/FilterKelas";
import ListCourse from "../components/ListCourse";

const BerandaKelasKu = () => {
  return (
    <>
      <div style={{ backgroundColor: "#EBF3FC" }}>
        <div className="d-flex title ">
          <h6 className="mt-5">Kelas Berjalan</h6>
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
            <button className="btn btn-light me-3">In Progress</button>
            <button className="btn btn-light me-3">Selesai</button>
            <div className="mt-3">
              <ListCourse />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BerandaKelasKu;
