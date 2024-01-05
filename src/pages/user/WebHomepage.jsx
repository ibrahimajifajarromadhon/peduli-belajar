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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchEmpty, setSearchEmpty] = useState(false);

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
        throw error;
      });
  }, []);

  useEffect(() => {
    const apiUrl = `${
      import.meta.env.VITE_API
    }/api/course/filter?page=1&size=20`;

    axios
      .get(apiUrl)
      .then((response) => {
        setCourses(response.data.data.courses);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const handleCategoryClick = (clickedCategory) => {
    setSelectedCategory(clickedCategory);
  };

  const visibleCourses = selectedCategory
    ? courses.filter(
        (course) =>
          course.category.categoryName === selectedCategory.categoryName
      )
    : courses
        .filter(
          (course) =>
            !searchQuery ||
            course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.teacher.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 3);

  useEffect(() => {
    setSearchEmpty(visibleCourses.length === 0);
  }, [visibleCourses]);

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
              Lihat Semua
            </Link>
          </p>
        </div>

        <div className="mobile-scroll-container">
          <div className="scrollable-buttons">
            <button
              className={`btn button ${!selectedCategory ? "active" : ""}`}
              style={{
                fontFamily: "Montserrat",
                fontWeight: "700",
                fontSize: "12px",
              }}
              onClick={() => handleCategoryClick(null)}
            >
              All
            </button>
            {category.map((categoryItem) => {
              return (
                <button
                  key={categoryItem.categoryName}
                  className={`btn button ${
                    selectedCategory === categoryItem ? "active" : ""
                  }`}
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                  onClick={() => handleCategoryClick(categoryItem)}
                >
                  {categoryItem.categoryName.replace(/_/g, " ")}
                </button>
              );
            })}
          </div>
        </div>

        {searchEmpty && !selectedCategory ? (
          <div className="col mt-5 mb-5">
            <i>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "18px",
                  color: "#6148FF",
                }}
              >
                No search results found.
              </p>
            </i>
          </div>
        ) : (
          <Row xs={1} md={3} className="g-4 mb-5">
            {visibleCourses
              .filter(
                (course) =>
                  (!searchQuery ||
                    course.title
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) ||
                    course.teacher
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())) &&
                  (!selectedCategory ||
                    course.category.categoryName ===
                      selectedCategory.categoryName)
              )
              .map((course) => (
                <Col key={course.courseCode}>
                  <Card
                    className="d-flex align-items-center justify-content-center card-course"
                    style={{
                      borderRadius: "25px",
                      marginTop: "20px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={course.category.categoryImage}
                      style={{
                        marginTop: "15px",
                        padding: "0px",
                        width: "35%",
                        height: "45%",
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
                          style={{
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                          }}
                        >
                          <FaStar style={{ color: "#F9CC00" }} />{" "}
                          {course.rating}
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
        )}
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

        .card-course {
          transition: transform 0.3s; 
        }

        .card-course:hover {
          transform: scale(1.02);
        }

        .button {
          background-color: #E8F1FF;
          border-radius: 25px;
          border: 1px solid #fff;
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
