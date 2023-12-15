import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imgCourse from "../../assets/image-course.png";
import { IoDiamond } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine, RiBook3Line, RiTimeFill } from "react-icons/ri";
import Cookies from 'js-cookie';
const PaymentHistory = ({ filter }) => { 
  const [listPaymentHistory, setListPaymentHistory] = useState([]);
  console.log (listPaymentHistory)
  useEffect(() => {
    const getPaymentHistory = async () => {
      const token = Cookies.get('token');
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/api/order/payment-history`,
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
  }, []); 
  
  return (
    <div className="row row-cols-1 row-cols-md-1 g-4">
      {listPaymentHistory.map((payment) => (
        <div className="col" key={payment.courseCode}>
          <div className="card" style={{ borderRadius: "22px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
            <img src={imgCourse} className="card-img-top" alt={payment.title} />
            <div className="card-body">
              <div className="d-flex">
                <h5 className="card-title" style={{ color: "#6148FF", fontWeight: "700" }}>
                  {payment.category.replace(/_/g, " ")}
                </h5>
                <div className="ms-auto">
                  <FaStar style={{ color: "yellow" }} /> {payment.rating} 
                </div>
              </div>
              <h6 className="card-title" style={{ fontSize: "15px", fontWeight: "650" }}>{payment.title}</h6>
              <p className="card-text mt-2 " style={{ fontSize: "14px", fontWeight: "500" }}>by {payment.teacher}</p>
              <div className="d-flex mt-2">
                <RiShieldStarLine style={{ color: "#73CA5C" }} />
                <p style={{ textDecoration: "none", color: "#6148FF", fontSize: "12px", fontWeight: "600", marginLeft: "5px" }}>
                  {payment.level} LEVEL
                </p>
                <RiBook3Line style={{ color: "#73CA5C", marginLeft: "30px" }} />
                <p style={{ textDecoration: "none", fontSize: "12px", fontWeight: "600",marginLeft: "5px" }}>
                  {payment.modul} Modul 
                </p>
                <RiTimeFill style={{ color: "#73CA5C", marginLeft: "30px" }} />
                <p style={{ textDecoration: "none", fontSize: "12px", fontWeight: "600",marginLeft: "5px" }}>
                  100 menit 
                </p>
              </div>
              <div className="btn-kelas mt-3">
                <button
                  className="btn rounded-4 text-light"
                  style={{
                    backgroundColor: payment.status === "Waiting for Payment" ? "var(--allert-red)" : "var(--allert-green)",
                    fontWeight: "500"
                  }}
                >
                  <IoDiamond style= {{marginRight:"5px"}}/>
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
