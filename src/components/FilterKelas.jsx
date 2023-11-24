import React from "react";

const FilterKelas = () => {
  return (
    <div className="filter">
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">Filter</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" for="exampleCheckbox">
            Paling Baru
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" for="exampleCheckbox">
            Paling Populer
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" for="exampleCheckbox">
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
          <label className="label-filter" for="exampleCheckbox">
            UI/UX Design
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" for="exampleCheckbox">
            Web Development
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" for="exampleCheckbox">
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
          <label className="label-filter" for="exampleCheckbox">
            Semua Level
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" for="exampleCheckbox">
            Beginner Level
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" for="exampleCheckbox">
            Intermediate Level
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" for="exampleCheckbox">
            Intermediate Level
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="exampleCheckbox"
          />
          <label className="label-filter" for="exampleCheckbox">
            Advanced Level
          </label>
        </div>
      </div>
      <p className="p text-center">Hapus Filter</p>
    </div>
    </div>
  );
};

export default FilterKelas;
