import React from "react";

function FilterClass() {
  return (
    <>
    <div className="filter">
    <div className="card rounded-4 p-3" style={{width:'250px'}}>
      <div className="card-body">
        <h6 className="card-title">Filter</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" htmlFor="exampleCheckbox">
            Paling Baru
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" htmlFor="exampleCheckbox">
            Paling Populer
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" htmlFor="exampleCheckbox">
            Promo
          </label>
        </div>
      </div>
      <div className="card-body">
        <h6 className="card-title">Kategori</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" htmlFor="exampleCheckbox">
            UI/UX Design
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" htmlFor="exampleCheckbox">
            Web Development
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" htmlFor="exampleCheckbox">
            Android Development
          </label>
        </div>
      </div>
      <div className="card-body">
        <h6 className="card-title">Level Kesulitan</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" htmlFor="exampleCheckbox">
            Semua Level
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" htmlFor="exampleCheckbox">
            Beginner Level
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" htmlFor="exampleCheckbox">
            Intermediate Level
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" htmlFor="exampleCheckbox">
            Intermediate Level
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" htmlFor="exampleCheckbox">
            Advanced Level
          </label>
        </div>
      </div>
      <p className="p text-center text-danger">Hapus Filter</p>
    </div>

    <style>
      {`
      @media (max-width: 525px) {
        .filter {
          display: none
        }
      }`}
    </style>
    </div>
</>
  );
}

export default FilterClass;
