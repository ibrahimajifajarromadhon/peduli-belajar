import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Img from "../../assets/image.png";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function BayarCourse() {
  return (
    <>
      <div className="container" style={{ marginTop: "55px" }}>
      <Link to={`/premiumClass`} style={{textDecoration:"none", color:"#fff"}}>
        <a
          className="d-flex"
          href="#"
          style={{ textDecoration: "none", color: "black" }}
        >
          <FaArrowLeft style={{ marginTop: "30px", marginBottom: "10px" }} />
          <p
            style={{
              margin: "0px",
              marginTop: "25px",
              fontWeight: "700",
              marginLeft: "15px",
              marginBottom: "10px",
            }}
          >
            Kembali
          </p>
        </a>
        </Link>
        <div className="d-flex justify-content-center">
          <button className="button">
            Selesaikan Pembayaran sampai 10 Maret 2023 12:00
          </button>
        </div>
      </div>
      <hr />
      <div className="container d-flex mb-5">
        <div className="col-7 p-5">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button button1 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Bank Transfer
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the first item's accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button button2 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Credit Card
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 wrapper p-4" style={{ marginTop: "55px" }}>
          <p style={{fontWeight:"700", fontSize:"25px", marginBottom:"0px"}}>Pembayaran Kelas</p>
          <Row xs={1} md={1} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
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
                  </div>
                  <Card.Title style={{ fontWeight: "700" }}>
                    Belajar Web Designer dengan Figma
                  </Card.Title>
                  <Card.Text style={{ fontWeight: "600" }}>
                    by John Doe
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
            <div className="d-flex justify-content-between payment mt-3">
            <p>Harga</p>
            <p>PPN 11%</p>
            <p>Total Bayar</p>
            </div>
            <div className="d-flex justify-content-between">
            <p className="payment1">Rp 349,000</p>
            <p className="payment1">Rp 38,390</p>
            <p className="total">Rp 387,390</p>
            </div>
          <div className="d-flex justify-content-center">
          <button className="button-kirim">
          <Link to={`/successBayarCourse`} style={{textDecoration:"none", color:"#fff"}}>
          Bayar dan Ikuti Kelas Selamanya<FaArrowCircleRight style={{marginLeft:"10px" ,width:"28px", height:"27px"}}/>
          </Link>
          </button>
          </div>
        </div>
        </div>

        <style>{`

        .wrapper {
            border:1px solid #6148FF;
            border-radius: 25px;
            margin-left: 20px;
            width: 40%;
            height: 100%;
        }
        .wrapper h3 {
            font-weight: 700;
            font-size: 25px;
        }

        .payment {
            font-weight: 700;
            font-size: 15px;
            margin-bottom: -10px;
        }

        .payment1 {
            font-weight: 400;
            padding: 0px;
            margin: 0px
        }

        .total {
            font-weight: 700;
            padding: 0px;
            margin: 0px;
            color: #6148FF;
        }

        .button-kirim {
            background-color: #FF0000;
            color: #fff;
            border: none;
            padding: 10px;
            border-radius: 25px;
            font-weight: 600;
            margin-top: 50px;
            width: 85%;
        }

            .accordion-item {
                margin-top:10px;
            }
            
            .button1.collapsed::after,
            .button2.collapsed::after {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ffffff' class='bi bi-chevron-down' viewBox='0 0 16 16'%3e%3cpath d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
            }

            .accordion-header > .button1 {
                background-color: #3C3C3C;
                color: #fff;
                font-weight: 600;
            }

            .accordion-header > .button2 {
                background-color: #6148FF;
                color: #fff;
                font-weight: 600;
            }
            
            .button {
                background-color: #FF0000;
                color: #fff;
                border: none;
                padding: 10px;
                border-radius: 10px;
                font-weight: 600;
                width: 60%
            }
            hr{
                height:2px;
                border-width:0;
                color:gray;
                background-color:gray;
                box-shadow:0px 0px 4px 0px grey;
            }

        `}</style>
    </>
  );
}

export default BayarCourse;
