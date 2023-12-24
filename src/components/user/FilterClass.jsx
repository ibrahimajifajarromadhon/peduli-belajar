import axios from "axios";
import React, { useEffect, useState } from "react";

function FilterClass({ onFilter }) {
  const [selectedFilters, setSelectedFilters] = useState({
    categoryName: [],
    type: [],
    level: [],
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/api/course/filter`,
        {
          params: {
            page: 1,
            size: 20,
            ...(selectedFilters.categoryName.length > 0 && {
              categoryName: selectedFilters.categoryName.join(","),
            }),
            ...(selectedFilters.type.length > 0 && {
              type: selectedFilters.type.join(","),
            }),
            ...(selectedFilters.level.length > 0 && {
            level: selectedFilters.level.join(","),
            }),
          },
        }
      );

      onFilter(response.data.data.courses);
      console.log(response.data.data.courses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedFilters]);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      categoryName: [],
      type: [],
      level: [],
    });

    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const applyFilter = () => {
    fetchData();
  };

  return (
    <>
      <div className="filter-bottom">
        <div
          className="offcanvas offcanvas-bottom"
          tabIndex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
          style={{ height: "550px", borderRadius: "25px 25px 0px 0px" }}
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
                onChange={(e) =>
                  handleFilterChange("type", [
                    ...selectedFilters.type,
                    "PREMIUM",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxBaruRs"
                style={{ fontWeight: "500" }}
              >
                Premium
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxPopularRs"
                onChange={(e) =>
                  handleFilterChange("type", [
                    ...selectedFilters.type,
                    "GRATIS",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxPopularRs"
                style={{ fontWeight: "500" }}
              >
                Gratis
              </label>
            </div>
            <h6 className="card-title mt-4">Kategori</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxUIDesignRs"
                onChange={(e) =>
                  handleFilterChange("categoryName", [
                    ...selectedFilters.categoryName,
                    "UIUX_DESIGN",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxUIDesignRs"
                style={{ fontWeight: "500" }}
              >
                UI/UX Design
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxWebDevelopmentRs"
                onChange={(e) =>
                  handleFilterChange("categoryName", [
                    ...selectedFilters.categoryName,
                    "WEB_DEVELOPMENT",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxWebDevelopmentRs"
                style={{ fontWeight: "500" }}
              >
                Web Development
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxAndroidDevelopmentRs"
                onChange={(e) =>
                  handleFilterChange("categoryName", [
                    ...selectedFilters.categoryName,
                    "ANDROID_DEVELOPMENT",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxAndroidDevelopmentRs"
                style={{ fontWeight: "500" }}
              >
                Android Development
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxDataScienceRs"
                onChange={(e) =>
                  handleFilterChange("categoryName", [
                    ...selectedFilters.categoryName,
                    "DATA_SCIENCE",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxDataScienceRs"
                style={{ fontWeight: "500" }}
              >
                Data Science
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxProductManagementRs"
                onChange={(e) =>
                  handleFilterChange("categoryName", [
                    ...selectedFilters.categoryName,
                    "PRODUCT_MANAGEMENT",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxProductManagementRs"
                style={{ fontWeight: "500" }}
              >
                Product Management
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxIosDevelopmentRs"
                onChange={(e) =>
                  handleFilterChange("categoryName", [
                    ...selectedFilters.categoryName,
                    "IOS_DEVELOPMENT",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxIosDevelopmentRs"
                style={{ fontWeight: "500" }}
              >
                IOS Development
              </label>
            </div>
            <h6 className="card-title mt-4">Level Kesulitan</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxBeginnerLevelRs"
                onChange={(e) =>
                  handleFilterChange("level", [
                    ...selectedFilters.level,
                    "BEGINNER",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxBeginnerLevelRs"
                style={{ fontWeight: "500" }}
              >
                Beginner Level
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxIntermediateLevelRs"
                onChange={(e) =>
                  handleFilterChange("level", [
                    ...selectedFilters.level,
                    "INTERMEDIATE",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxIntermediateLevelRs"
                style={{ fontWeight: "500" }}
              >
                Intermediate Level
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxAdvancedLevelRs"
                onChange={(e) =>
                  handleFilterChange("level", [
                    ...selectedFilters.level,
                    "ADVANCE",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxAdvancedLevelRs"
                style={{ fontWeight: "500" }}
              >
                Advanced Level
              </label>
            </div>
            <div className="text-center mt-3">
              <button
                className="btn btn-light"
                style={{
                  backgroundColor: "#6148FF",
                  color: "white",
                  borderRadius: "20px",
                  width: "50%",
                }}
                onClick={applyFilter}
              >
                Terapkan Filter
              </button>
            </div>
            <p
              className="p text-center text-danger mt-3"
              onClick={clearFilters}
            >
              Hapus Filter
            </p>
          </div>
        </div>
      </div>

      <div className="filter">
        <div className="card rounded-4 p-3" style={{ width: "280px" }}>
          <div className="card-body">
            <h6 className="card-title" style={{ fontWeight: "700" }}>
              Filter
            </h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxBaru"
                onChange={(e) =>
                  handleFilterChange("type", [
                    ...selectedFilters.type,
                    "PREMIUM",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxBaru"
                style={{ fontWeight: "500" }}
              >
                Premium
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxPopular"
                onChange={(e) =>
                  handleFilterChange("type", [
                    ...selectedFilters.type,
                    "GRATIS",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxPopular"
                style={{ fontWeight: "500" }}
              >
                Gratis
              </label>
            </div>
          </div>
          <div className="card-body">
            <h6 className="card-title" style={{ fontWeight: "700" }}>
              Kategori
            </h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxUIDesign"
                onChange={(e) =>
                  handleFilterChange("categoryName", [
                    ...selectedFilters.categoryName,
                    "UIUX_DESIGN",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxUIDesign"
                style={{ fontWeight: "500" }}
              >
                UI/UX Design
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxWebDevelopment"
                onChange={(e) =>
                  handleFilterChange("categoryName", [
                    ...selectedFilters.categoryName,
                    "WEB_DEVELOPMENT",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxWebDevelopment"
                style={{ fontWeight: "500" }}
              >
                Web Development
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxAndroidDevelopment"
                onChange={(e) =>
                  handleFilterChange("categoryName", [
                    ...selectedFilters.categoryName,
                    "ANDROID_DEVELOPMENT",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxAndroidDevelopment"
                style={{ fontWeight: "500" }}
              >
                Android Development
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxDataScience"
                onChange={(e) =>
                  handleFilterChange("categoryName", [
                    ...selectedFilters.categoryName,
                    "DATA_SCIENCE",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxDataScience"
                style={{ fontWeight: "500" }}
              >
                Data Science
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxProductManagement"
                onChange={(e) =>
                  handleFilterChange("categoryName", [
                    ...selectedFilters.categoryName,
                    "PRODUCT_MANAGEMENT",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxProductManagement"
                style={{ fontWeight: "500" }}
              >
                Product Management
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxIosDevelopment"
                onChange={(e) =>
                  handleFilterChange("categoryName", [
                    ...selectedFilters.categoryName,
                    "IOS_DEVELOPMENT",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxIosDevelopment"
                style={{ fontWeight: "500" }}
              >
                IOS Development
              </label>
            </div>
          </div>
          <div className="card-body">
            <h6 className="card-title" style={{ fontWeight: "700" }}>
              Level Kesulitan
            </h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxBeginnerLevel"
                onChange={(e) =>
                  handleFilterChange("level", [
                    ...selectedFilters.level,
                    "BEGINNER",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxBeginnerLevel"
                style={{ fontWeight: "500" }}
              >
                Beginner Level
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxIntermediateLevel"
                onChange={(e) =>
                  handleFilterChange("level", [
                    ...selectedFilters.level,
                    "INTERMEDIATE",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxIntermediateLevel"
                style={{ fontWeight: "500" }}
              >
                Intermediate Level
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxAdvancedLevel"
                onChange={(e) =>
                  handleFilterChange("level", [
                    ...selectedFilters.level,
                    "ADVANCE",
                  ])
                }
              />
              <label
                className="label-filter"
                htmlFor="checkboxAdvancedLevel"
                style={{ fontWeight: "500" }}
              >
                Advanced Level
              </label>
            </div>
          </div>
          <p
            className="p text-center"
            style={{ color: "#FF0000", fontWeight: "600", marginTop: "20px", cursor: "pointer" }}
            onClick={clearFilters}
          >
            Hapus Filter
          </p>
        </div>

        <style>
          {`
        .filter-bottom {
          display: none;
        }

        .form-check-input {
          height: 25px;
          width: 25px;
        }

        .form-check {
          margin-top: 10px;
        }

        .label-filter {
          margin-left: 10px;
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
