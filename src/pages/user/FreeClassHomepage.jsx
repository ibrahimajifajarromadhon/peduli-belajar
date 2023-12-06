import React from "react";
import FilterClass from "../../components/user/FilterClass";
import ListCourse from "../../components/user/ListCourse";
import { Link } from "react-router-dom";
import { CiFilter } from "react-icons/ci";

const FreeClassHomepage = () => {
  return (
    <>
<div style={{ backgroundColor: "#EBF3FC", marginTop:'4em' }}>
    <div className='container'>
      <div className='topic d-flex'>
        <h4 className='mt-5' style={{fontWeight:"700"}}>Topik Kelas </h4>
        <input className='form-control ms-auto mt-5' placeholder='Cari Kelas' type='search' style={{width:'20%', padding:"10px", borderRadius:"15px", borderColor: "#6148FF"}}/>
        <button
          className="btn btn-primary ms-auto mt-5"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          <CiFilter />
        </button>
      </div>
      <div className='row'>
        <div className='col-md-4' style={{ marginBottom: '2em' }}>
          <div className='mt-4'>
            <FilterClass />            
          </div>
        </div>
        <div className='col-md-8' style={{ marginBottom: '2em' }}>
          <div className='btn-menu d-flex mt-4'>
            <Link to={"/allCourseClass"} className='btn btn-light me-4' style={{width:'20%', padding:"10px", borderRadius:"15px", fontWeight:"600"}}>All</Link>
            <Link to={"/premiumClass"} className='btn btn-light me-4' style={{width:'40%', padding:"10px", borderRadius:"15px", fontWeight:"600"}}>Kelas Premium</Link>
            <Link to={"/freeClass"} className='btn btn-light me-4' style={{width:'30%', backgroundColor: "#6148FF", color: "white", padding:"10px", borderRadius:"15px", fontWeight:"600"}}>Kelas Gratis</Link>
          </div>
          <div className='mt-3'>
            <ListCourse />    
          </div>
        </div>
      </div>
    </div>

    <style>
      {`
      .topic .btn {
        display: none;
      }
      
      @media (max-width: 576px) {
        .topic .form-control {
          display: none;
        }

        .topic .btn {
          display: block;
          height: 10%;
        }
      }
      `}
    </style>       
    </div>
    </>
  );
};

export default FreeClassHomepage;
