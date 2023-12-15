import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Img from "../../assets/image.png";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MasterCard from "../../assets/mastercard.png";
import Visa from "../../assets/visa.png";
import Amex from "../../assets/amex.png";
import Paypal from "../../assets/paypal.png";
import BRI from "../../assets/BRI.png";
import BTN from "../../assets/BTN.png";
import BSI from "../../assets/BSI.png";
import Muamalat from "../../assets/Muamalat.png";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { Toast, Button  } from "react-bootstrap";

const BayarCourse = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderDetails, setOrderDetails] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const courseData = location.state?.courseData || "";
  const courseCode = courseData.courseCode;
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const token = Cookies.get("token");
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        const response = await fetch(
          `${import.meta.env.VITE_API}/api/order/${courseCode}`,
          {
            method: "GET",
            headers: headers,
          }
        );

        if (response.ok) {
          const orderDetails = await response.json();
          setOrderDetails(orderDetails.data);
        } else {
          console.error("Failed to fetch order details");
        }
      } catch (error) {
        console.error("An error occurred while fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, [courseCode]);

  const handleBack = () => {
    navigate(`/allCourseClass`);
  };
  console.log({ paymentMethod });
  console.log({ orderDetails: orderDetails });

  const handlePayment = async () => {
    try {
      const paymentData = {
        courseCode: courseData?.courseCode || "",
        paymentMethod: paymentMethod || "",
      };

      const token = Cookies.get("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await fetch(`${import.meta.env.VITE_API}/api/order/`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        console.log("Pembayaran berhasil!");
        navigate(`/successBayarCourse`, {
          state: { courseCode: courseData?.courseCode },
        });
      } else {
        console.error("Gagal melakukan pembayaran");
        setShowAlert(true);

      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <>
    <Toast
        show={showAlert}
        onClose={() => setShowAlert(false)}
        style={{
          position: "fixed",
          top: "80px",
          right: "20px",
          minWidth: "250px",
        }}
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Gagal Pembayaran</strong>
          <Button variant="outline-dark" size="sm" onClick={() => setShowAlert(false)}>
            Close
          </Button>
        </Toast.Header>
        <Toast.Body>
          Gagal melakukan pembayaran. Silakan beli course yang lain.
        </Toast.Body>
      </Toast>
      <div className="container" style={{ marginTop: "55px" }}>
        <div
          className="d-flex"
          onClick={handleBack}
          style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
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
        </div>
        <div className="d-flex justify-content-center batas">
          <button className="button">
            Selesaikan Pembayaran sampai 10 Maret 2023 12:00
          </button>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-1">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button button1 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    onClick={() => setPaymentMethod("BANK_TRANSFER")}
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
                    <div className="d-flex justify-content-center align-content-center gap-3 pb-3 pt-3">
                      <a href="#">
                        <img
                          src={BRI}
                          alt="Bank BRI"
                          style={{ width: "2.5em", height: "1em" }}
                        />
                      </a>
                      <a href="#">
                        <img
                          src={BTN}
                          alt="Bank BTN"
                          style={{ width: "3em", height: "1.3em" }}
                        />
                      </a>
                      <a href="#">
                        <img
                          src={BSI}
                          alt="Bank BSI"
                          style={{ width: "2.7em", height: "1.1em" }}
                        />
                      </a>
                      <a href="#">
                        <img
                          src={Muamalat}
                          alt="Bank Muamalat"
                          style={{ width: "3.5em", height: "1.4em" }}
                        />
                      </a>
                    </div>
                    <form>
                      <div className="form-group1">
                        <label htmlFor="virtualAccount">Virtual Account</label>
                        <input
                          type="text"
                          id="virtualAccountNumber"
                          className="form-control-plaintext"
                          defaultValue="3118 6000 0001 031"
                          />
                      </div>
                    </form>
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
                    onClick={() => setPaymentMethod("CREDIT_CARD")}
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
                    <div className="d-flex justify-content-center align-content-center gap-3 pb-3 pt-3">
                      <a href="#">
                        <img src={MasterCard} alt="" />
                      </a>
                      <a href="#">
                        <img src={Visa} alt="" />
                      </a>
                      <a href="#">
                        <img src={Amex} alt="" />
                      </a>
                      <a href="#">
                        <img src={Paypal} alt="" />
                      </a>
                    </div>
                    <form>
                      <div className="form-group1">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                          type="text"
                          id="cardNumber"
                          className="form-control-plaintext"
                          defaultValue="4480 0000 0000 0000"
                        />
                      </div>
                      <div className="form-group1">
                        <label htmlFor="cardHolderName">Card Holder Name</label>
                        <input
                          type="text"
                          id="cardHolderName"
                          className="form-control-plaintext"
                          defaultValue="John Doe"
                        />
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="form-group">
                          <label htmlFor="cvv">CVV</label>
                          <input
                            type="text"
                            id="cvv"
                            className="form-control-plaintext"
                            defaultValue="123"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="expireDate">Expiry date</label>
                          <input
                            type="text"
                            id="expireDate"
                            className="form-control-plaintext"
                            defaultValue="12/23"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-2 wrapper p-4 mb-5">
            <p
              style={{
                fontWeight: "700",
                fontSize: "25px",
                marginBottom: "0px",
              }}
            >
              Pembayaran Kelas
            </p>
            <Row xs={1} md={1} className="g-4">
              {courseData && (
                <Col>
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
                          {orderDetails.category}
                        </a>
                      </div>
                      <Card.Title style={{ fontWeight: "700" }}>
                        {orderDetails.courseTitle}
                      </Card.Title>
                      <Card.Text style={{ fontWeight: "600" }}>
                        by {orderDetails.authorCourse}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </Row>
            <div className="table-container">
              <table className="payment-table">
                <tbody>
                  <tr className="payment-header">
                    <td>Harga</td>
                    <td>PPN 11%</td>
                    <td>Total Bayar</td>
                  </tr>
                  <tr>
                    <td className="payment1">Rp {orderDetails.price?.toLocaleString()}</td>
                    <td className="payment1">Rp {orderDetails.tax?.toLocaleString()}</td>
                    <td className="total">Rp {orderDetails.totalPrice?.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-center">
              <button className="button-kirim" onClick={handlePayment}>
                Bayar dan Ikuti Kelas Selamanya
                <FaArrowCircleRight
                  style={{
                    marginLeft: "10px",
                    width: "28px",
                    height: "27px",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
            @media (max-width: 768px) {
              .wrapper {
                margin-top: 20px;
              }

              .batas button {
                display: none;
              }
            }
            
            .wrapper {
                border:1px solid #6148FF;
                border-radius: 25px;
                margin-left: 20px;
                width: 400px;
            }

            .table-container {
              margin: 10px 20px 20px;
              width: 100%;
              overflow: hidden;
              border-collapse: collapse;
            }

            .payment-table {
              width: 100%;
              border: 2px solid transparent;
            }

            .payment-table td {
              border: 2px solid transparent;
            }

            .payment-header {
              font-weight: 700;
            }

            .payment-table .total {
              font-weight: 700;
            }

            .payment-table .total {
              color: #6148FF;
            }

            .button-kirim {
                background-color: #FF0000;
                color: #fff;
                border: none;
                padding: 10px;
                border-radius: 25px;
                font-weight: 600;
                margin-top: 20px;
                margin-bottom: 20px;
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

            .form-group, .form-group1 label {
              font-weight: 600;
              padding: 0px;
              margin: 0px;
            }
    
            .form-group1 input[type="text"], .form-group input[type="text"] {
              border: none;
              border-bottom: 1px solid #D0D0D0;
              width: 100%;
              padding-bottom: 5px; 
              outline: none; 
            }
    
            .form-group1 input, .form-group input {
              margin-bottom: 1.5em; 
              border-radius: 0px;
              width: 50px;
            }

        `}</style>
    </>
  );
};

export default BayarCourse;
