import React from "react";
import { Link } from "react-router-dom";
import FilterClass from "../../components/user/FilterClass";
import ListCoursePremium from "../../components/user/ListCoursePremium";
import { CiFilter } from "react-icons/ci";

function PremiumClassHomepage() {
  return (
    <>
<div style={{ backgroundColor: "#EBF3FC", marginTop:'4em' }}>
    <div className='container'>
      <div className='topic d-flex'>
        <h5 className='mt-5'>Topik Kelas </h5>
        <input className='form-control ms-auto mt-5' placeholder='cari kelas...' type='search' style={{width:'20%', borderRadius:'20px', borderColor: "#6148FF"}}/>
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
        <div className='col-md-8'>
          <div className='btn-menu d-flex mt-4'>
            <Link to={"/allCourseClass"} className='btn btn-light me-4' style={{width:'20%'}}>All</Link>
            <Link to={"/premiumClass"} className='btn btn-light me-4' style={{width:'40%', backgroundColor: "#6148FF", color: "white"}}>Kelas Premium</Link>
            <Link to={"/freeClass"} className='btn btn-light me-4' style={{width:'30%'}}>Kelas Gratis</Link>
          </div>
          <div className='mt-3'>
            <ListCoursePremium />    
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
}

export default PremiumClassHomepage;
