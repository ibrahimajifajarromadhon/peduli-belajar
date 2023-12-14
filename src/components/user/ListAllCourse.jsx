import React, { useEffect, useState } from "react";
import ImgCourse from "../../assets/image-course.png";
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { RiBook3Line } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import ModalBuyPremium from "./ModalBuyPremium";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const ListAllCourse = ({filter}) => {
  const [listCourse, setListCourse] = useState([]);

  const getCourse = async () => {
    const token = Cookies.get('token');
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/api/course/filter?page=1&size=20&type=PREMIUM &type=GRATIS`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setListCourse(response.data.data.courses);
    } catch (error) {
      console.log("terjadi kesalahan");
    }
  };

  useEffect(() => {
    getCourse();
  }, []);

  const filterCourses = () => {
    if (filter === "all") {
      return listCourse;
    } else if (filter === "premium") {
      return listCourse.filter((course) => course.price !== 0 );
    } else if (filter === "gratis") {
      return listCourse.filter((course) => course.price === 0 );
    } else {
      return [];
    }
  };

  const filteredCourses = filterCourses();

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 ">
      {filteredCourses.map((course) => (
        <div className="col" key={course.id}>
          <div className="card" style={{ borderRadius: "22px" }}>
            <img src={ImgCourse} className="card-img-top" alt="..."/>
            <div className="card-body">
              <div className="d-flex">
                <h5 className="card-title" style={{ color: "#6148FF" }}>
                  {course.category}
                </h5>
                <div className="ms-auto">
                  <FaStar style={{ color: "yellow" }} /> {course.rating}
                </div>
              </div>
              <h6 className="card-title">{course.title}</h6>
              <p className="card-text">by {course.teacher}</p>
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
                  {course.level} Level
                </p>
                <RiBook3Line style={{ color: "#73CA5C", marginLeft: "30px" }} />{" "}
                <p
                  style={{
                    textDecoration: "none",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {course.modul} Modul
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
              <div>
              {course.price === 0 ? (
                <Link to={`/detailClass/${course.courseCode}`} className="btn btn-kelas">
                  Mulai Kelas
                </Link>
              ) : (
                <>
                <button
                  className="btn btn-kelas"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  type="button"
                >
                  <IoDiamond />
                  Premium
                </button>
                <ModalBuyPremium />
                </>
              )}
              </div>
            </div>
          </div>
        </div>
      ))}
      <style>{`
      .btn-kelas  {
        padding: 5px;
        background-color: #489CFF;
        color: white;
        border-radius: 25px;
        width: 40%;
        font-weight: 600;
      }

      .btn-kelas:hover {
        background-color: #489CFF;
        color: white;
      }
      `}</style>
    </div>
  );
};

export default ListAllCourse;
