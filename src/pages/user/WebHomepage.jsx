import React from "react";
import Hero from "../../components/user/Hero";
import Category from "../../components/user/Category";
import { Card, Col, Row } from "react-bootstrap";
import Footer from "../../components/user/Footer";
import { RiShieldStarLine } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import Img from "../../assets/image.png";
import { FaStar } from "react-icons/fa";
import { RiBook3Line } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function WebHomepage() {
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
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#6148FF",
                fontSize: "15px",
                fontWeight: "800",
              }}
            >
              Lihat Semua{" "}
            </a>
          </p>
        </div>
        <button className="btn button">All</button>
        <button className="btn button">Data Science</button>
        <button className="btn button">Web Development</button>
        <Row xs={1} md={3} className="g-4 mb-5">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx}>
              <Card style={{ borderRadius: "25px", marginTop: "20px" }}>
                <Card.Img
                  variant="top"
                  src={Img}
                  style={{ margin: "0px", padding: "0px" }}
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
                      UI/UX Design
                    </a>

                    <div className="ms-auto">
                      <FaStar style={{ color: "yellow" }} /> 4.8
                    </div>
                  </div>
                  <Card.Title style={{ fontWeight: "700" }}>
                    Belajar Web Designer dengan Figma
                  </Card.Title>
                  <Card.Text style={{ fontWeight: "600" }}>
                    by John Doe
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
                      Advanced Level
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
                      10 Modul
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
                      100 menit
                    </p>
                  </div>
                  <Link
                    to={`/login`}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <button
                      className="btn btn-beli"
                      style={{ margin: "0px", borderRadius: "35px" }}
                    >
                      <div className="d-flex">
                        <IoDiamond className="icon-beli" />
                        <h6
                          style={{
                            marginRight: "10px",
                            marginLeft: "20px",
                            marginTop: "5px",
                          }}
                        >
                          Beli
                        </h6>
                        <h6 style={{ marginTop: "5px" }}>Rp 249.000</h6>
                      </div>
                    </button>
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

        .btn-beli {
          background-color: #489CFF;
          color: #fff;
          padding: 3px;
          width: 57%;
        }

        .btn-beli:hover {
          background-color: #6148FF;
          color: #fff;
        }

        .icon-beli {
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
