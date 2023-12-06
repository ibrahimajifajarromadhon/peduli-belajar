import React from "react";
import imgCourse from "../../assets/image-course.png"
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { RiBook3Line } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ModalBuyPremium = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title text-center ms-auto" id="exampleModalLabel" style={{fontWeight:"700", marginTop:"20px"}}>
              Selangkah Lagi Menuju <p style={{color:"#6148FF"}}>Kelas Premium</p>
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
          <div className="card" style={{borderRadius: "22px", height:'80%'}}>
        <img src={imgCourse} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="d-flex">
            <h5 className="card-title" style={{ color: "#6148FF" }}>
              UI/UX Design
            </h5>
            <div className="ms-auto">
              <FaStar style={{ color: "yellow" }} /> 4.8
            </div>
          </div>
          <h6 className="card-title">Membuat Grid System dengan Figma</h6>
          <p className="card-text">by Simon Doe</p>
          <div className="d-flex">
            <RiShieldStarLine style={{ color: "#73CA5C" }} />{" "}
            <p
              style={{
                textDecoration: "none",
                color: "#6148FF",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Advanced Level
            </p>
            <RiBook3Line style={{ color: "#73CA5C", marginLeft: "30px" }} />{" "}
            <p
              style={{
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              10 Modul
            </p>
            <RiTimeFill style={{ color: "#73CA5C", marginLeft: "30px" }} />{" "}
            <p
              style={{
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              100 menit
            </p>
          </div>
          <button className="btn btn-bayar" style={{margin:"0px", borderRadius:"35px"}}>
            <div className="d-flex">
            <h6 style={{marginRight:"10px", marginLeft:"20px", marginTop:"5px"}}>Beli</h6>
            <h6 style={{marginTop:"5px"}}>Rp 249.000</h6> 
            </div>
          </button>
        </div>
      </div>
          </div>
          <Link to={`/bayarCourse`}  style={{textDecoration:"none", color:"#fff"}}>
          <div className="text-center">
            <button type="button" className="btn text-center" style={{width:'50%', marginBottom:'20px', borderRadius:'20px', backgroundColor: "#6148FF", color:"white", fontWeight:"600", padding:"5px"}} data-bs-dismiss="modal">
              Beli Sekarang <FaArrowRightLong />
            </button>
            </div>
            </Link>
        </div>
      </div>

      <style>{`
      .btn-bayar  {
        padding: 5px;
        background-color: #489CFF;
        color: white;
        border-radius: 25px;
        width: 45%;
        font-weight: 600;
      }

      .btn-bayar:hover {
        background-color: #489CFF;
        color: white;
      }
      `}</style>
    </div>
  );
};

export default ModalBuyPremium;
