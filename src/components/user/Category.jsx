import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function Category() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API}/api/category`;

    axios
      .get(apiUrl)
      .then((response) => {
        const uniqueCategories = Array.from(new Set(response.data.map((item) => item.categoryName)))
          .slice(0, 6)
          .map((categoryName) => response.data.find((item) => item.categoryName === categoryName));

        setCourses(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: `var(--primary-young-blue)` }}>
      <div className="container" style={{ paddingBottom: "30px" }}>
        <div
          className="d-flex"
          style={{
            justifyContent: "space-between",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <h1 style={{ fontSize: "25px", fontWeight: "700", fontFamily:"Montserrat" }}>
            Kategori Belajar
          </h1>
          <p>
            <Link
              to={"/allCourseClass"}
              style={{
                textDecoration: "none",
                color: "#6148FF",
                fontSize: "15px",
                fontWeight: "800",
                fontFamily:"Montserrat"
              }}
            >
              Lihat Semua{" "}
            </Link>
          </p>
        </div>
        <Row xs={2} md={6} className="g-4">
          {courses.map((category) => {
            return (
              <Col key={category.id}>
                <Link to={"/allCourseClass"} style={{ textDecoration: "none" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Card.Img
                      variant="top"
                      src={category.categoryImage}
                      style={{
                        margin: "5px",
                        padding: "5px",
                        width: "90%",
                        height: "80%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className="kolom"
                    />
                    <Card.Title
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "600",
                        paddingTop: "5px",
                        fontFamily:"Montserrat"
                      }}
                    >
                      {category.categoryName.replace(/_/g, ' ')}
                    </Card.Title>
                  </a>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
      <style>
        {`
        .kolom {
          transition: transform .3s; 
        }
        
        .kolom:hover {
          transform: scale(1.1);
        }
        `}
      </style>
    </div>
  );
}

export default Category;
