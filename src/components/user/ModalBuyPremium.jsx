import React, { useState, useEffect } from "react";
import imgCourse from "../../assets/image-course.png";
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { RiBook3Line } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const ModalBuyPremium = ({ courseCode, handleCloseModal  }) => {
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState(null);
  console.log({courseData})
  
  useEffect(() => {
    const detailCourse = `${import.meta.env.VITE_API}/api/course/${courseCode}`;

    const token = Cookies.get("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(detailCourse, config)
      .then((response) => {
        setCourseData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching course data", error);
      });
  }, [courseCode]);

  const handleClick = () => {
    navigate("/bayarCourse", { state: { courseData } });
  };

  const handleCloseModalButton = () => {
    handleCloseModal();
  };
  return (
    <>
    <div className="modal-overlay" onClick={handleCloseModalButton}></div>

    <div
    className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title text-center ms-auto" id="exampleModalLabel" style={{ fontWeight: "700", marginTop: "20px" }}>
              Selangkah Lagi Menuju <p style={{ color: "#6148FF" }}>Kelas Premium</p>
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModalButton}
            ></button>
          </div>
          <div className="modal-body">
            {courseData && (
              <div className="card" style={{ borderRadius: "22px", height: "80%" }}>
                <img src={imgCourse} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="d-flex">
                    <h5 className="card-title" style={{ color: "#6148FF" }}>
                      {courseData.category.replace(/_/g, ' ')}
                    </h5>
                    <div className="ms-auto">
                      <FaStar style={{ color: "yellow" }} /> 4.9
                    </div>
                  </div>
                  <h6 className="card-title">{courseData.title}</h6>
                  <p className="card-text">by {courseData.teacher}</p>
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
                      {courseData.level} LEVEL
                    </p>
                    <RiBook3Line style={{ color: "#73CA5C", marginLeft: "30px" }} />{" "}
                    <p
                      style={{
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {courseData.modul} Modul
                    </p>
                    <RiTimeFill style={{ color: "#73CA5C", marginLeft: "30px" }} />{" "}
                    <p
                      style={{
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      100 Menit
                    </p>
                  </div>
                  <button className="btn btn-bayar" style={{ margin: "0px", borderRadius: "35px" }}>
                    <div className="d-flex">
                      <h6 style={{ marginRight: "10px", marginLeft: "20px", marginTop: "5px" }}>Beli</h6>
                      <h6 style={{ marginTop: "5px" }}>Rp {courseData.price.toLocaleString()}</h6>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="text-center">
            <button
              onClick={handleClick}
              type="button"
              className="btn text-center"
              style={{ width: '50%', marginBottom: '20px', borderRadius: '20px', backgroundColor: "#6148FF", color: "white", fontWeight: "600", padding: "5px" }}
              data-bs-dismiss="modal"
            >
              Beli Sekarang <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>

      <style>{`
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
      }
      
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
    </>
  );
};

export default ModalBuyPremium;
