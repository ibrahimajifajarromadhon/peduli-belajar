import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Background from "../../assets/kategori.png";
import axios from "axios";
import { Link } from "react-router-dom";

function Category() {
  const [courses, setCourses] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API}/api/course`;
    // const token = localStorage.getItem('token');

    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // };

    axios
      .get(apiUrl)
      .then((response) => {
        setCourses(response.data.data);
        const categories = response.data.data.map((course) => course.category);
        setUniqueCategories(Array.from(new Set(categories)));
        // setIsLoading(false);
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
          <h1 style={{ fontSize: "25px", fontWeight: "700" }}>
            Kategori Belajar
          </h1>
          <p>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: `var(--primary-purple)`,
                fontSize: "15px",
                fontWeight: "800",
              }}
            >
              Lihat Semua{" "}
            </a>
          </p>
        </div>
        <Row xs={2} md={6} className="g-4">
          {uniqueCategories.map((category) => {
            return (
              <Col key={category}>
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Card.Img
                      variant="top"
                      src={Background}
                      className="kolom"
                    />
                    <Card.Title
                      style={{
                        textAlign: "center",
                        fontSize: "15px",
                        fontWeight: "700",
                        paddingTop: "5px",
                      }}
                    >
                      {category}
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
