import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
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
import { toast } from 'react-hot-toast';

const BayarCourse = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderDetails, setOrderDetails] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const courseData = location.state?.courseData || "";
  const courseCode = courseData.courseCode;

  const payMethodCreditCard = () => {
    setPaymentMethod("CREDIT_CARD");
  }

  const payMethodBankTransfer = () => {
    setPaymentMethod("BANK_TRANSFER");
  }

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
          const updatedOrderDetails = {
            ...orderDetails.data,
            category: {
              categoryName: orderDetails.data.category?.categoryName || "",
              categoryImage: orderDetails.data.category?.categoryImage || "",
            },
          };

          setOrderDetails(updatedOrderDetails);
        } else {
          toast.error("Gagal fetching order course!", {
            style: {
              fontFamily: 'Montserrat'
            },
          });
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
      
      const responseData = await response.json();
      
      if (response.ok) {
        toast.success("Pembayaran berhasil!", {
          style: {
            fontFamily: 'Montserrat'
          },
        });
        navigate(`/successBayarCourse`, {
          state: { courseCode: courseData?.courseCode },
        });
      } else {
        toast.error("Gagal melakukan pembayaran!", {
          style: {
            fontFamily: 'Montserrat'
          },
        });
      }
    } catch (error) {
      toast.error("Gagal melakukan pembayaran!", {
        style: {
          fontFamily: 'Montserrat'
        },
      });
    }
  };

  return (
    <>
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
              fontFamily:"Montserrat"
            }}
          >
            Kembali
          </p>
        </div>
        <div className="d-flex justify-content-center batas">
          <button className="button">
            Selesaikan Pembayaran sampai 31 Desember 2023 12:00
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
                    onClick={payMethodBankTransfer}
                  >
                    Bank Transfer
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                  style={{ borderRadius: "0px 0px 10px 10px", boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)", padding:"0px 50px 20px 50px" }}
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
                          readOnly
                        />
                      </div>
                      {/* <div className="text-end">
                        <button
                          type="button"
                          className="btn btn-pay"
                          style={{
                            textDecoration: "none",
                            fontFamily: "Poppins",
                            fontSize: "18px",
                            padding: "10px",
                            fontWeight: "500",
                          }}
                        >
                          <BiSolidDollarCircle style={{ marginRight: "5px" }} />
                          Bayar
                        </button>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
              <div className="accordion-item" >
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button button2 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                    onClick={payMethodCreditCard}
                  >
                    Credit Card
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                  style={{ borderRadius: "0px 0px 10px 10px", boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)", padding:"0px 50px 20px 50px" }}
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
                          readOnly
                        />
                      </div>
                      <div className="form-group1">
                        <label htmlFor="cardHolderName">Card Holder Name</label>
                        <input
                          type="text"
                          id="cardHolderName"
                          className="form-control-plaintext"
                          defaultValue="John Doe"
                          readOnly
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
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="expireDate">Expiry date</label>
                          <input
                            type="text"
                            id="expireDate"
                            className="form-control-plaintext"
                            defaultValue="12/23"
                            readOnly
                          />
                        </div>
                      </div>
                      {/* <div className="text-end">
                        <button
                          type="button"
                          className="btn btn-pay"
                          style={{
                            textDecoration: "none",
                            fontFamily: "Poppins",
                            fontSize: "18px",
                            padding: "10px",
                            fontWeight: "500",
                          }}
                        >
                          <BiSolidDollarCircle style={{ marginRight: "5px" }} />
                          Bayar
                        </button>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-2 wrapper p-4 mb-5" style={{boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)"}}>
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
              {orderDetails && orderDetails.category && (
                <Col>
                  <Card
                    className="d-flex align-items-center justify-content-center"
                    style={{ borderRadius: "25px", marginTop: "15px" }}
                  >
                    <Card.Img
                      variant="top"
                      src={orderDetails.category?.categoryImage || ""}
                      style={{
                        marginTop: "15px",
                        padding: "0px",
                        width: "35%",
                        height: "45%",
                      }}
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
                            fontSize: "18px",
                            fontWeight: "800",
                          }}
                        >
                          {orderDetails.category?.categoryName.replace(
                            /_/g,
                            " "
                          ) || ""}
                        </a>
                      </div>
                      <Card.Title style={{ fontWeight: "700" }}>
                        {orderDetails.courseTitle}
                      </Card.Title>
                      <Card.Text style={{ fontWeight: "600" }}>
                        by {orderDetails.teacher}
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
                    <td className="payment1">
                      Rp {orderDetails.price?.toLocaleString()}
                    </td>
                    <td className="payment1">
                      Rp {orderDetails.tax?.toLocaleString()}
                    </td>
                    <td className="total">
                      Rp {orderDetails.totalPrice?.toLocaleString()}
                    </td>
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

            @media (min-width: 768px) {
                .wrapper {
                  border:0.1px solid #6148FF;
                  border-radius: 25px;
                  margin-left: 100px;
                  width: 450px;
              }
            }
            
            .table-container {
              margin: 10px 20px 20px;
              width: 100%;
              overflow: hidden;
              border-collapse: collapse;
              font-family: Montserrat;
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

            .btn-pay {
              background-color: #00DC00;
              color: #fff;
            }
            .btn-pay:hover {
              background-color: #00B600;
              color: #fff;
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
font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;

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
