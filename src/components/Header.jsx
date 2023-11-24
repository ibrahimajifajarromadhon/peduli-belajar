import React from "react";
// import { FaRegUser } from "react-icons/fa6";
// import { FaRegBell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#6148FF", color:"white", padding:"10px"}}>
      <div className="container">
        <b className="navbar-brand" href="#"   style={{color:"white"}}>
          Peduli Belajar
        </b>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
          <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Cari Kursus Terbaik"
                aria-label="Search"
                style={{width:"526px", padding:"7px", marginLeft:"30px"}}
              />
              <button className="btn btn-primary" type="submit">
                <FaSearch className="icon"/>
              </button>
              </div>
          </form>
          <div className="menu-nav ms-auto">
            <Link to={`/login`} >                         
              <button className="btn btn-transparant me-3" style={{color:"white", fontFamily:"Montserrat", fontWeight:"bold"}}><MdOutlineLogin style={{marginRight:"1px"}}/> Masuk </button>            
            </Link>
            {/* <FaRegBell className="icon me-3"/>
            <FaRegUser className="icon me-3"/> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;