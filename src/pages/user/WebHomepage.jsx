import React, { useEffect, useState } from "react";
import Hero from "../../components/user/Hero";
import Category from "../../components/user/Category";
import { Card, CardImg, Col, Row } from "react-bootstrap";
import Footer from "../../components/user/Footer";
import { RiShieldStarLine } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { RiBook3Line } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";

function WebHomepage() {
  const [courses, setCourses] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API}/api/course/filter`;

    axios
      .get(apiUrl)
      .then((response) => {
        setCourses(response.data.data.courses);
        console.log({response:response.data.data})
        const categories = response.data.data.courses.map((course) => course.category);
        setUniqueCategories(Array.from(new Set(categories)));
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
          <h1 style={{ fontSize: "25px", fontWeight: "700" }}>
            Kursus Popular
          </h1>
          <p>
          <Link to={"/allCourseClass"} style={{
                textDecoration: "none",
                color: "#6148FF",
                fontSize: "15px",
                fontWeight: "800",
              }}>
              Lihat Semua{" "}
            </Link>
          </p>
        </div>

        <Link to={"/allCourseClass"}>
          <button className="btn button">All</button>
          {uniqueCategories.map((category) => (
            <button key={category} className="btn button">
              {category.categoryName.replace(/_/g, " ")}
            </button>
          ))}
        </Link>

        <Row xs={1} md={3} className="g-4 mb-5">
          {courses.map((course) => (
            <Col key={course.courseCode}>
              <Card className="d-flex align-items-center justify-content-center" style={{ borderRadius: "25px", marginTop: "20px" }}>
                <Card.Img
                  variant="top"
                  src={course.category.categoryImage}
                  style={{ margin: "5px", padding: "0px", width:"50%", height:"50%" }}
                />
                <Card.Body>
                  <div className="d-flex">
                    <a
                      href="#"
                      style={{
                        margin: "0px",
                        padding: "0px",
                        textDecoration: "none",
                        color: "#6148FF",
                        fontSize: "15px",
                        fontWeight: "800",
                      }}
                    >
                      {course.category.categoryName.replace(/_/g, " ")}
                    </a>
                    <div className="ms-auto">
                      <FaStar style={{ color: "yellow", fontWeight: "700" }} />{" "}
                      4.5
                    </div>
                  </div>
                  <Card.Title style={{ fontWeight: "700" }}>
                    {course.title}
                  </Card.Title>
                  <Card.Text style={{ fontWeight: "600" }}>
                    by {course.teacher}
                  </Card.Text>
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
                        <h6 style={{ marginTop: "5px" }}>Gratis</h6>
                      </button>
                    ) : (
                      <button
                        className="btn btn-premium"
                        style={{ margin: "0px", borderRadius: "35px" }}
                      >
                        <div className="d-flex">
                          <IoDiamond className="icon-premium" />
                          <h6
                            style={{
                              marginRight: "10px",
                              marginLeft: "20px",
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
