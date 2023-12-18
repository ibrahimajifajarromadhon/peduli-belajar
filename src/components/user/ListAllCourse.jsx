import React, { useEffect, useState } from "react";
import ImgCourse from "../../assets/image-course.png";
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { RiBook3Line } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const ListAllCourse = ({ filter }) => {
  const [listCourse, setListCourse] = useState([]);

  const getCourse = async () => {
    const token = Cookies.get("token");
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API
        }/api/course/filter?page=1&size=20&type=PREMIUM &type=GRATIS`,
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
      return listCourse.filter((course) => course.price !== 0);
    } else if (filter === "gratis") {
      return listCourse.filter((course) => course.price === 0);
    } else {
      return [];
    }
  };

  const filteredCourses = filterCourses();
  
  const navigate = useNavigate();

  const handleButtonClick = (course) => {
    const token = Cookies.get("token");
    if (token) {
      navigate(`/detailClass/${course.courseCode}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {filteredCourses.map((course) => (
        <div className="col" key={course.courseCode}>
          <div className="card" style={{ borderRadius: "22px" }}>
            <img src={course.category.categoryImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="d-flex">
                <h5 className="card-title" style={{ color: "#6148FF" }}>
                  {course.category.categoryName.replace(/_/g, " ")}
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
                    fontSize: "11px",
                    fontWeight: "600",
                  }}
                >
                  {course.level} LEVEL
                </p>
                <RiBook3Line style={{ color: "#73CA5C", marginLeft: "50px" }} />{" "}
                <p
                  style={{
                    textDecoration: "none",
                    fontSize: "11px",
                    fontWeight: "600",
                  }}
                >
                  {course.modul} Modul
                </p>
                <RiTimeFill style={{ color: "#73CA5C", marginLeft: "50px" }} />{" "}
                <p
                  style={{
                    textDecoration: "none",
                    fontSize: "11px",
                    fontWeight: "600",
                  }}
                >
                  100 Menit
                </p>
              </div>
              <div>
                {course.price === 0 ? (
                  <button
                    className="btn btn-kelas"
                    onClick={() => handleButtonClick(course)}
                  >
                    Mulai Kelas
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleButtonClick(course)}
                      className="btn btn-kelas"
                    >
                      <IoDiamond />
                      Premium
                    </button>
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
          h
        }

        .btn-kelas:hover {
          background-color: #489CFF;
          color: white;
        }

        .card-img-top {
          width: 100%;
          height: 150px;
        }
      `}</style>
    </div>
  );
};

export default ListAllCourse;
