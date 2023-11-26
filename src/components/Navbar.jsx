import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          Peduli Belajar
        </a>
        <form className="form-search d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Cari Kursus terbaik"
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            <FaSearch />
          </button>
        </form>
        <div className="menu-nav ms-auto">
          <button className="btn btn-primary me-3">kelas</button>
          <FaRegBell className="icon me-3" />
          <FaRegUser className="icon me-3" />
        </div>
        <div className="mobile-nav">
          <FaRegBell className="icon me-3" />
          <FaRegUser className="icon me-3" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar
