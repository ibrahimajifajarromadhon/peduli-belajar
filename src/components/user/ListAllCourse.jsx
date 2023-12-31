import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { RiBook3Line } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

const ListAllCourse = ({ filter, listCourses }) => {
  const [listCourse, setListCourse] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");
  const navigate = useNavigate();

  const getCourse = async () => {
    const token = Cookies.get("token");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/api/course/filter`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },

          params: {
            size: 20,
          },
        }
      );
      setListCourse(response.data.data.courses);
    } catch (error) {
      console.log("terjadi kesalahan");
    }
  };

  useEffect(() => {
    if (listCourses && Array.isArray(listCourses) && listCourses.length >= 0) {
      setListCourse(listCourses);
    } else {
      getCourse();
    }
  }, [filter, listCourses]);

  const filterCourses = () => {
    if (!searchQuery) {
      if (filter === "all") {
        return listCourse;
      } else if (filter === "premium") {
        return listCourse.filter((course) => course.price !== 0);
      } else if (filter === "gratis") {
        return listCourse.filter((course) => course.price === 0);
      } else {
        return [];
      }
    } else {
      return listCourse.filter((course) => {
        const titleMatch = course.title
          .toLowerCase()
          .includes(searchQuery.toLocaleLowerCase());
        const typeMatch =
          filter === "all" ||
          (filter === "premium" && course.price !== 0) ||
          (filter === "gratis" && course.price === 0);

        return titleMatch && typeMatch;
      });
    }
  };

  const filteredCourses = filterCourses();

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
      {filteredCourses.length === 0 ? (
        <div className="col">
          <i>
            <p style={{ fontFamily: "Montserrat", fontWeight: "600" }}>
              No search results found.
            </p>
          </i>
        </div>
      ) : (
        filteredCourses.map((course) => (
          <div className="col" key={course.courseCode}>
            <div
              className="card card-course"
              style={{
                borderRadius: "22px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ borderRadius: "22px" }}
              >
                <img
                  src={course.category.categoryImage}
                  className="card-img-top"
                  alt="..."
                  style={{
                    marginTop: "15px",
                    padding: "0px",
                    width: "35%",
                    height: "45%",
                  }}
                />
              </div>
              <div className="card-body">
                <div className="d-flex">
                  <h5
                    className="card-title"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      color: "#6148FF",
                    }}
                  >
                    {course.category.categoryName.replace(/_/g, " ")}
                  </h5>
                  <div
                    className="ms-auto"
                    style={{ fontFamily: "Montserrat", fontWeight: "600" }}
                  >
                    <FaStar style={{ color: "#F9CC00" }} /> {course.rating}
                  </div>
                </div>
                <h6
                  className="card-title"
                  style={{ fontFamily: "Montserrat", fontWeight: "700" }}
                >
                  {course.title}
                </h6>
                <p
                  className="card-text"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  by {course.teacher}
                </p>
                <div className="d-flex" style={{ fontFamily: "Montserrat" }}>
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
                  <RiBook3Line
                    style={{ color: "#73CA5C", marginLeft: "20px" }}
                  />{" "}
                  <p
                    style={{
                      textDecoration: "none",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    {course.modul} Modul
                  </p>
                  <RiTimeFill
                    style={{ color: "#73CA5C", marginLeft: "20px" }}
                  />{" "}
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
                <div style={{ fontFamily: "Montserrat" }}>
                  {course.type === "GRATIS" ? (
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
        ))
      )}
      <style>{`
        .card-course {
          transition: transform 0.3s; 
        }

        .card-course:hover {
          transform: scale(1.02);
        }

        .btn-kelas  {
          padding: 5px;
          background-color: #489CFF;
          color: white;
          border-radius: 25px;
          width: 40%;
          font-weight: 600;
        }

        .btn-kelas:hover {
          background-color: #6148FF;
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
