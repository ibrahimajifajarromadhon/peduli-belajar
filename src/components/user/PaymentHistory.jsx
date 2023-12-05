import React from 'react'
import imgCourse from "../../assets/image-course.png";
import { IoDiamond } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { RiBook3Line } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
function PaymentHistory() {
  return (
    <div className="row row-cols-1 row-cols-md-1 g-4 ">
    <div className="col">
      <div className="card" style={{ borderRadius: "22px" }}>
        <img src={imgCourse} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="d-flex">
            <h5 className="card-title" style={{ color: "#6148FF" }}>
              Web Development
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
          <div className="btn-kelas">
            <button className="btn btn-primary">
              <IoDiamond />
              Premium
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{ borderRadius: "22px" }}>
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
          <div className="btn-kelas">
            <button className="btn btn-primary">
              <IoDiamond />
              Premium
            </button>
          </div>
        </div>
      </div>
    </div>

    <style>
      {`
    @media (max-width: 425px) {
      .card {
        width: 400px;
        margin-right: 10px;
      }
    }`}
    </style>
  </div>
  )
}

export default PaymentHistory
