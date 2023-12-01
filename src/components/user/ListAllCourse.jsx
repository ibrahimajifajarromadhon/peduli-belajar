import React from 'react'
import ImgCourse from "../../assets/image-course.png"
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { RiBook3Line } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import ModalBuyPremium from './ModalBuyPremium';
import { Link } from 'react-router-dom';

const ListAllCourse = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 ">
      <div className="col">
        <div className="card" style={{borderRadius: "22px"}}>
          <img src={ImgCourse} className="card-img-top" alt="..." />
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
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" type='button'><IoDiamond />Premium</button>
          </div>
          <ModalBuyPremium />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{borderRadius: "22px"}}>
          <img src={ImgCourse} className="card-img-top" alt="..." />
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
              <Link to={"/detailClass/1"} className="btn btn-primary">Mulai Kelas</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{borderRadius: "22px"}}>
          <img src={ImgCourse} className="card-img-top" alt="..." />
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
          <button className="btn btn-primary"><IoDiamond />Premium</button>
          </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{borderRadius: "22px"}}>
          <img src={ImgCourse} className="card-img-top" alt="..." />
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
              <button className="btn btn-primary">Mulai Kelas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListAllCourse