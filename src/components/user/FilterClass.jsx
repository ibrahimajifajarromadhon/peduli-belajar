import React from "react";

function FilterClass() {
  return (
    <>
    <div className="filter-bottom">
        <div
          className="offcanvas offcanvas-bottom"
          tabIndex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
          style={{height:'550px', borderRadius:'25px 25px 0px 0px'}}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasBottomLabel"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
          <h6 className="card-title">Filter</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxBaruRs"
              />
              <label className="label-filter-new" htmlFor="checkboxBaruRs">
                Paling Baru
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxPopularRs"
              />
              <label className="label-filter-popular" htmlFor="checkboxPopularRs">
                Paling Populer
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxDiscountRs"
              />
              <label
                className="label-filter-discount"
                htmlFor="checkboxDiscountRs"
              >
                Promo
              </label>
            </div>
          <h6 className="card-title mt-4">Kategori</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxUIDesignRs"
              />
              <label className="label-filter" htmlFor="checkboxUIDesignRs">
                UI/UX Design
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxWebDevelopmentRs"
              />
              <label className="label-filter" htmlFor="checkboxWebDevelopmentRs">
                Web Development
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxAndroidDevelopmentRs"
              />
              <label
                className="label-filter"
                htmlFor="checkboxAndroidDevelopmentRs"
              >
                Android Development
              </label>
            </div>
          <h6 className="card-title mt-4">Level Kesulitan</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxAllLevelRs"
              />
              <label className="label-filter" htmlFor="checkboxAllLevelRs">
                Semua Level
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxBeginnerLevelRs"
              />
              <label className="label-filter" htmlFor="checkboxBeginnerLevelRs">
                Beginner Level
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxIntermediateLevelRs"
              />
              <label
                className="label-filter"
                htmlFor="checkboxIntermediateLevelRs"
              >
                Intermediate Level
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxAdvancedLevelRs"
              />
              <label className="label-filter" htmlFor="checkboxAdvancedLevelRs">
                Advanced Level
              </label>
            </div>
            <div className="text-center mt-3">
              <button className="btn btn-light" style={{backgroundColor: "#6148FF", color:'white', borderRadius:'20px', width:'50%'}}>Terapkan Filter</button>
            </div>
            <p className="p text-center text-danger mt-3">Hapus Filter</p>
          </div>
          </div>
      </div>

      <div className="filter">
        <div className="card rounded-4 p-3" style={{ width: "280px" }}>
          <div className="card-body">
            <h6 className="card-title" style={{fontWeight:"700"}}>Filter</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxBaru"
              />
              <label className="label-filter-new" htmlFor="checkboxBaru" style={{fontWeight:"500"}}>
                Paling Baru
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxPopular"
              />
              <label className="label-filter-popular" htmlFor="checkboxPopular" style={{fontWeight:"500"}}>
                Paling Populer
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxDiscount"
              />
              <label
                className="label-filter-discount"
                htmlFor="checkboxDiscount"
                style={{fontWeight:"500"}}
              >
                Promo
              </label>
            </div>
          </div>
          <div className="card-body">
            <h6 className="card-title" style={{fontWeight:"700"}}>Kategori</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxUIDesign"
              />
              <label className="label-filter" htmlFor="checkboxUIDesign" style={{fontWeight:"500"}}>
                UI/UX Design
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxWebDevelopment"
              />
              <label className="label-filter" htmlFor="checkboxWebDevelopment" style={{fontWeight:"500"}}>
                Web Development
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxAndroidDevelopment"
              />
              <label
                className="label-filter"
                htmlFor="checkboxAndroidDevelopment"
                style={{fontWeight:"500"}}
              >
                Android Development
              </label>
            </div>
          </div>
          <div className="card-body">
            <h6 className="card-title" style={{fontWeight:"700"}}>Level Kesulitan</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxAllLevel"
              />
              <label className="label-filter" htmlFor="checkboxAllLevel" style={{fontWeight:"500"}}>
                Semua Level
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxBeginnerLevel"
              />
              <label className="label-filter" htmlFor="checkboxBeginnerLevel" style={{fontWeight:"500"}}>
                Beginner Level
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxIntermediateLevel"
              />
              <label
                className="label-filter"
                htmlFor="checkboxIntermediateLevel"
                style={{fontWeight:"500"}}
              >
                Intermediate Level
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxAdvancedLevel"
              />
              <label className="label-filter" htmlFor="checkboxAdvancedLevel" style={{fontWeight:"500"}}>
                Advanced Level
              </label>
            </div>
          </div>
          <p className="p text-center" style={{color:"#FF0000", fontWeight:"600", marginTop:"20px"}}>Hapus Filter</p>
        </div>

        <style>
          {`
        .filter-bottom {
          display: none;
        }

        @media (max-width: 576px) {
          .filter {
            display: none;
          }

          .filter-bottom {
            display: block;
          }
        }`}
        </style>
      </div>
      </>
  );
}

export default FilterClass;
