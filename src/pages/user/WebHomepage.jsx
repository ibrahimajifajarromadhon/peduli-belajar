import React, { useEffect, useState } from "react";
import Hero from "../../components/user/Hero";
import Category from "../../components/user/Category";
import { Card, Col, Row } from "react-bootstrap";
import Footer from "../../components/user/Footer";
import { RiShieldStarLine } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { RiBook3Line } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

function WebHomepage() {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    console.log("Search Query:", searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API}/api/category`;

    axios
      .get(apiUrl)
      .then((response) => {
        const uniqueCategories = Array.from(
          new Set(response.data.map((item) => item.categoryName))
        )
          .slice(0, 6)
          .map((categoryName) =>
            response.data.find((item) => item.categoryName === categoryName)
          );

        setCategory(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API}/api/course/filter`;

    axios
      .get(apiUrl)
      .then((response) => {
        setCourses(response.data.data.courses);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div style={{ marginTop: "3.7em", overflow: "hidden" }}>
      <Hero />
      <Category />
      <div className="container">
        <div
          className="d-flex"
          style={{
            justifyContent: "space-between",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "25px",
              fontWeight: "700",
              fontFamily: "Montserrat",
            }}
          >
            Kursus Popular
          </h1>
          <p>
            <Link
              to={"/allCourseClass"}
              style={{
                textDecoration: "none",
                color: "#6148FF",
                fontSize: "15px",
                fontWeight: "800",
                fontFamily: "Montserrat",
              }}
            >
              Lihat Semua{" "}
            </Link>
          </p>
        </div>

        <div className="mobile-scroll-container">
          <Link to={"/allCourseClass"}>
            <div className="scrollable-buttons">
              <button
                className="btn button"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "12px",
                }}
              >
                All
              </button>
              {category.map((category) => {
                return (
                  <button
                    key={category}
                    className="btn button"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      fontSize: "12px",
                    }}
                  >
                    {category.categoryName.replace(/_/g, " ")}
                  </button>
                );
              })}
            </div>
          </Link>
        </div>

        <Row xs={1} md={3} className="g-4 mb-5">
          {courses
            .filter(
              (course) =>
                !searchQuery || 
                course.title
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                course.teacher.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((course) => (
              <Col key={course.courseCode}>
                <Card
                  className="d-flex align-items-center justify-content-center"
                  style={{ borderRadius: "25px", marginTop: "20px" }}
                >
                  <Card.Img
                    variant="top"
                    src={course.category.categoryImage}
                    style={{
                      marginTop: "15px",
                      padding: "0px",
                      width: "40%",
                      height: "50%",
                    }}
                  />
                  <Card.Body>
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
                        <FaStar style={{ color: "yellow" }} /> 4.5
                      </div>
                    </div>
                    <Card.Title
                      style={{ fontFamily: "Montserrat", fontWeight: "700" }}
                    >
                      {course.title}
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                        fontSize: "14px",
                      }}
                    >
                      by {course.teacher}
                    </Card.Text>
                    <div
                      className="d-flex"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      <RiShieldStarLine style={{ color: "#73CA5C" }} />{" "}
                      <p
                        style={{
                          textDecoration: "none",
                          color: "#6148FF",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        {course.level} LEVEL
                      </p>
                      <RiBook3Line
                        style={{ color: "#73CA5C", marginLeft: "30px" }}
                      />{" "}
                      <p
                        style={{
                          textDecoration: "none",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        {course.modul} Modul
                      </p>
                      <RiTimeFill
                        style={{ color: "#73CA5C", marginLeft: "30px" }}
                      />{" "}
                      <p
                        style={{
                          textDecoration: "none",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        50 Menit
                      </p>
                    </div>
                    <Link
                      to={`/login`}
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      {course.price === 0 ? (
                        <button
                          className="btn btn-free"
                          style={{ margin: "0px", borderRadius: "35px" }}
                        >
                          <h6
                            style={{
                              marginTop: "5px",
                              fontFamily: "Montserrat",
                            }}
                          >
                            Gratis
                          </h6>
                        </button>
                      ) : (
                        <button
                          className="btn btn-premium"
                          style={{ margin: "0px", borderRadius: "35px" }}
                        >
                          <div
                            className="d-flex"
                            style={{ fontFamily: "Montserrat" }}
                          >
                            <IoDiamond className="icon-premium" />
                            <h6
                              style={{
                                marginRight: "10px",
                                marginLeft: "10px",
                                marginTop: "5px",
                              }}
                            >
                              Beli
                            </h6>
                            <h6 style={{ marginTop: "5px" }}>
                              Rp {course.price.toLocaleString()}
                            </h6>
                          </div>
                        </button>
                      )}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
      <Footer />
      <style>
        {`

        @media (max-width: 768px) {
          .mobile-scroll-container {
            overflow-x: auto;
            white-space: nowrap;
            -ms-overflow-style: -ms-autohiding-scrollbar;
            scrollbar-width: thin;
            scrollbar-color: #888 #f5f5f5;
            border-bottom: none;          
          }
          
          .scrollable-buttons {
            display: inline-block;
            white-space: nowrap;
            margin-bottom: 20px; 
          }
          
          .btn {
            margin-right: 5px;
          }
        }

        .button {
          border-radius: 25px;
          background-color: #E8F1FF;
          font-size: 15px;
          font-weight: 700;
          margin-right: 10px;
        }
        
        .button:hover {
          background-color: #6148FF;
          color: #fff;
        }

        .btn-free {
          background-color: #489CFF;
          color: #fff;
          padding: 0.3em;
          width: 40%;
        }

        .btn-free:hover {
          background-color: #6148FF;
          color: #fff;
        }

        .btn-premium {
          background-color: #489CFF;
          color: #fff;
          padding: 0.3em;
          width: 57%;
        }

        .btn-premium:hover {
          background-color: #6148FF;
          color: #fff;
        }

        .icon-premium {
          margin-left: 13px;
          margin-top: 7px;
          margin-right: -8px;
        }
        `}
      </style>
    </div>
  );
}

export default WebHomepage;
