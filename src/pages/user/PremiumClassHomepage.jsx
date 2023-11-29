import React from "react";
import { Link } from "react-router-dom";
import FilterClass from "../../components/user/FilterClass";
import ListCoursePremium from "../../components/user/ListCoursePremium";

function PremiumClassHomepage() {
  return (
    <>
      <div
        style={{ backgroundColor: "#EBF3FC", marginTop: "3.8em" }}
        className="d-flex flex-column align-items-center w-100"
      >
        <div className="m-5">
          <div className="container d-flex">
            <h5 className="p">Topik Kelas</h5>
            <input
              className="form-control ms-auto "
              style={{
                width: "220px",
                borderRadius: "20px",
                borderColor: "#6148FF",
              }}
              type="search"
              placeholder="Cari Kelas..."
              aria-label="Search"
            />
            <div className="filter-offcanvas ms-auto">
              <button
                className="btn btn-link ms-auto"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                Filter
              </button>

              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
                style={{ width: "80%" }}
              >
                <div className="offcanvas-header">
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
                  <button
                    type="button"
                    className="btn btn-primary d-block mx-auto"
                    style={{ marginTop: "20px" }}
                  >
                    Terapkan Filter
                  </button>
                  <p className="text-center text-danger">Hapus Filter</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex mt-3">
            <FilterClass />
            <div
              className="btn-menu d-flex flex-column"
              style={{ marginLeft: "5em" }}
            >
              <div className="d-flex justify-content-between">
                <Link to={"/allCourseClass"} className="btn btn-light" style={{ width: "20%" }}>
                  All
                </Link>
                <button
                  className="btn btn-light "
                  style={{
                    width: "40%",
                    backgroundColor: "#6148FF",
                    color: "white",
                  }}
                >
                  Kelas Premium
                </button>
                <Link
                  to={"/freeClass"}
                  className="btn btn-light "
                  style={{ width: "30%" }}
                >
                  Kelas Gratis
                </Link>
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

        <style>
          {`
          .filter-offcanvas {
            display: none;
          }

          @media only screen and (max-width: 525px) {
            body {
              background-color: #EBF3FC; 
            }
            
            .btn-menu .btn {
              margin-top: 10px
            }

            .m-5 .form-control {
              display: none;
            }

            .p {
              margin-left: 85px;
            }

            .filter-offcanvas {
              display: block;
            }
          }`}
        </style>
      </div>
    </>
  );
}

export default PremiumClassHomepage;
