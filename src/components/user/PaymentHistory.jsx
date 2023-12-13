import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imgCourse from "../../assets/image-course.png";
import { IoDiamond } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine, RiBook3Line, RiTimeFill } from "react-icons/ri";

const PaymentHistory = ({ filter, email }) => { // Tambahkan props email
  const [listPaymentHistory, setListPaymentHistory] = useState([]);

  useEffect(() => {
    const getPaymentHistory = async (email) => {
      console.log(email);
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/api/order/payment-history/${email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setListPaymentHistory(response.data.data);
      } catch (error) {
        console.error("terjadi kesalahan", error); 
      }
    };

    getPaymentHistory();
  }, [email]); 
  const filterPaymentHistory = () => {
    if (filter === "all") {
      return listPaymentHistory;
    } else if (filter === "paid") {
      return listPaymentHistory.filter((payment) => payment.status === "Paid");
    } else if (filter === "wait") {
      return listPaymentHistory.filter((payment) => payment.status === "Waiting for Payment");
    } else {
      return [];
    }
  };

  const filteredList = filterPaymentHistory(); 

  return (
    <div className="row row-cols-1 row-cols-md-1 g-4">
      {filteredList.map((payment) => ( 
        <div className="col" key={payment.id}>
          <div className="card" style={{ borderRadius: "22px" }}>
            <img src={imgCourse} className="card-img-top" alt={payment.courseName} />
            <div className="card-body">
            <div className="d-flex">
            <h5 className="card-title" style={{ color: "#6148FF" }}>
              Web Development
            </h5>
            <div className="ms-auto">
              <FaStar style={{ color: "yellow" }} /> 4.8
            </div>
          </div>
          <h6 className="card-title">Membuat Grid System dengan Figma</h6>
          <p className="card-text">by Simon Doe</p>
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
              <div className="btn-kelas">
                <button 
                  className="btn rounded-4 text-light"
                  style={{ backgroundColor: `var(--allert-red)`, fontWeight: "500" }}
                >
                  <IoDiamond />
                  {payment.status}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentHistory;
