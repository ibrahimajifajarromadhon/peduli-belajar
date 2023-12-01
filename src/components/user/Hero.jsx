import React from "react";
import { Col, Row } from "react-bootstrap";
import Heroes from "../../assets/hero.png";
import BgHero from "../../assets/bg-hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
    <Row className="hero">
      <Col style={{ margin: "0px", padding: "0px" }}>
        <img src={Heroes} alt="" />
      </Col>
      <div style={{ position: "absolute" }}>
        <img src={BgHero} alt="" />
      </div>
      <Col style={{ backgroundColor: "#6148FF" }}>
        <div
          style={{
            marginTop: "70px",
            marginLeft: "50px",
            fontSize: "25px",
            fontWeight: "800",
            position: "absolute",
            width: "300px",
          }}
        >
          <h1 style={{ fontSize: "30px", fontWeight: "600", color: "#FFFFFF" }}>
            Belajar<br /> dari Praktisi Terbaik!
          </h1>
          <Link to={`/login`} style={{textDecoration:"none", color:"#fff"}}>
          <button
            style={{
              width: "250px",
              height: "40px",
              color: "#6148FF",
              backgroundColor: "white",
              fontWeight: "700",
              borderRadius: "15px",
            }}
            className="btn button"
          >
            IKUTI KELAS
          </button>
          </Link>
        </div>
      </Col>
    </Row>
    <style>
    {`
      @media (max-width: 768px) {
        .hero {
          display: none;
        }
      }
      .button {
        transition: transform .5s; 
      }
      
      .button:hover {
        transform: scale(1.1);
      }
    `}
  </style>
  </>
  );
}

export default Hero;
