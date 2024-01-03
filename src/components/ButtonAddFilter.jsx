import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import AdminDashboard from "../pages/AdminDashboard";
import ManageClassAdmin from "../pages/ManageClassAdmin";
import ModalAddClass from "./ModalAddClass";

function ButtonAddFilter() {
  const location = useLocation();
  const isMyClassRoute = location.pathname === "/admin/class";
  const isDashboardRoute = location.pathname === "/admin/dashboard";
  const [selectedOption, setSelectedOption] = useState("");

  const filterOptions = isMyClassRoute
    ? [
        { label: "Kelas Premium", value: "kelas-premium" },
        { label: "Kelas Gratis", value: "kelas-gratis" },
      ]
    : isDashboardRoute
    ? [
        { label: "Sudah Bayar", value: "sudah-bayar" },
        { label: "Belum Bayar", value: "belum-bayar" },
      ]
    : [];

  const handleFilterChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div
      className={`d-flex flex-column gap-4 w-100 my-lg-4 px-3`}
      style={{ marginBottom: "20px" }}
    >
      <div className="d-flex flex-row justify-content-end gap-3 mx-3">
        <div className="position-relative">
          {isMyClassRoute && <ModalAddClass className="d-lg-flex" />}
        </div>
        <div className="position-relative">
          <select
            className="form-select rounded-pill"
            style={{
              borderColor: `var(--primary-purple)`,
              color: `var(--primary-purple)`,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            value={selectedOption}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="">All</option>
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        {isDashboardRoute && <AdminDashboard filter={selectedOption} />}
        {isMyClassRoute && <ManageClassAdmin filter={selectedOption} />}
      </div>
      <style>{`
        .rounded-pill {
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 700;
        }
        .position-relative {
          position: relative;
        }
        @media (max-width: 767px) {
          .form-select {
            width: 100%;
          }
          .position-relative {
            margin-top: 1em;
            margin-bottom: 1em;
          }
        }
      `}</style>
    </div>
  );
}

export default ButtonAddFilter;
