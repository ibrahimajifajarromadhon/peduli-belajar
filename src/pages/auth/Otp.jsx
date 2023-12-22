import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-hot-toast';

const Otp = () => {
  const inputRefs = useRef([]);
  const { email } = useParams();
  const [counter, setCounter] = useState(0);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  // const location = useLocation();
  // const userEmail = location.state?.email || "";

  // useEffect(() => {
  //   if (counter > 0) {
  //     const timer = setTimeout(() => setCounter(counter - 1), 600);
  //     return () => clearTimeout(timer);
  //   }

  //   if (!otpSent && counter === 0) {
  //     otpRequest(userEmail).then((response) => {
  //       setExpectedOtp(response.otp);
  //       setOtpSent(true);
  //     });
  //   }
  // }, [counter, userEmail, otpSent]);
  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 600);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  const handleVerification = async (e) => {
    e.preventDefault();

    try {
      const otpValue = otp.join("");
      let config = {
        method: "POST",
        url: `${
          import.meta.env.VITE_API
        }/api/auth/verify?email=${email}&otp=${otpValue}`,
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.request(config);
      toast.success("Registrasi berhasil!");
      navigate("/login");
    } catch (error) {
      toast.error("Kode OTP salah!");
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await fetch(
        `https://peduli-belajar-backend-production.up.railway.app/api/auth/regenerate-otp?email=${email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        toast.success("Kode OTP berhasil dikirim!");
      } else {
        toast.error("Kode OTP gagal dikirim! Silakan coba lagi.");
      }
    } catch (error) {
      toast.error("Kode OTP gagal dikirim! Silakan coba lagi.");
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="" style={{ padding: "2em", fontFamily:"Montserrat" }}>
      <Link to="/register">
        <FaArrowLeft style={{ color: "var(--neutral-black)" }} />
      </Link>
      <form onSubmit={handleVerification}>
        <h3
          className=""
          style={{
            marginTop: "20px",
            color: "var(--primary-purple)",
            fontWeight: 700,
          }}
        >
          Masukan OTP
        </h3>
        <br />
        <div className="container height-100 d-flex justify-content-center align-items-center">
          <div className="position-relative">
            <div className="">
              <h6 className="text-center">
                Ketik 6 digit kode yang dikirimkan ke <b>{email}</b>
              </h6>
              <br />
              <div
                id="otp"
                className="inputs d-flex flex-row justify-content-center mt-2 gap-2"
              >
                {[...Array(6).keys()].map((index) => (
                  <input
                    key={index}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    className="m-1 text-center form-control rounded-4"
                    style={{
                      width: "3em",
                      height: "3em",
                      border: "1px solid var(--primary-purple)",
                      color: "black",
                      fontWeight: 700,
                    }}
                    type="text"
                    id={`otp-${index + 1}`}
                    maxLength="1"
                    name="otp"
                    value={otp[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                ))}
              </div>
              <br />
              {counter > 0 ? (
                <p style={{ textAlign: "center" }}>
                  Kirim Ulang OTP dalam {counter} detik
                </p>
              ) : (
                <span
                  style={{
                    textAlign: "center",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "red",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                  onClick={handleResendOTP}
                >
                  Kirim Ulang OTP
                </span>
              )}
              <br />
              <button
                id="loginButton"
                className="btn rounded-4 text-light"
                style={{
                  backgroundColor: "var(--primary-purple)",
                  width: "100%",
                  padding: "0.6em",
                }}
                type="submit"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
        <div className="text-center"></div>
      </form>
    </div>
  );
};

export default Otp;
