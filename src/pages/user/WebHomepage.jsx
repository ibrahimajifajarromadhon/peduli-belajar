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

function WebHomepage() {
  
  return (
    <div style={{marginTop:"3.7em", overflow:"hidden"}}>
      <Hero />
      <Category />
      <div className="container" >
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
        <button
          className="btn"
          style={{
            borderRadius: "25px",
            backgroundColor: "#E8F1FF",
            fontSize: "15px",
            fontWeight: "700",
            marginRight: "10px",
          }}
        >
          All
        </button>
        <button
          className="btn"
          style={{
            borderRadius: "25px",
            backgroundColor: "#E8F1FF",
            fontSize: "15px",
            fontWeight: "700",
            marginRight: "10px",
          }}
        >
          Data Science
        </button>
        <button
          className="btn"
          style={{
            borderRadius: "25px",
            backgroundColor: "#E8F1FF",
            fontSize: "15px",
            fontWeight: "700",
            marginRight: "10px",
          }}
        >
          Web Development
        </button>
        <Row xs={1} md={3} className="g-4 mb-5">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx}>
              <Card style={{ borderRadius: "25px", marginTop: "20px"}}>
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
              <RiBook3Line style={{ color: "#73CA5C", marginLeft: "30px" }} />{" "}
              <p
                style={{
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                10 Modul
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
                  <button
                    className="btn btn-primary"
                    style={{margin:"0px", borderRadius:"35px"}}
                  >
                    <div className="d-flex">
                    <IoDiamond style={{marginTop:"7px", marginLeft:"5px"}}/>
                    <h6 style={{padding:"5px", marginRight:"10px"}}>Beli</h6>
                    <h6 style={{padding:"5px", margin:"0px"}}>Rp 249.000</h6> 
                    </div>
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
     </div>
  );
}

export default WebHomepage;
