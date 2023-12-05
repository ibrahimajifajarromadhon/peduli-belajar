import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(60);
  const [userOtp, setUserOtp] = useState(Array(6).fill(""));
  const [isOtpValid, setIsOtpValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const expectedOtp = "123456";

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 0) {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [counter]);

  const handleResendOtp = () => {
    setCounter(60);
    setUserOtp(Array(6).fill(""));
    setIsOtpValid(true);
    setErrorMessage("");
  };

  const handleInputChange = (index, value) => {
    const newOtp = [...userOtp];
    newOtp[index] = value;

    setUserOtp(newOtp);

    // Fokus ke input selanjutnya jika input tidak kosong
    if (value !== "" && index < newOtp.length - 1) {
      document.getElementById(`otp-${index + 2}`).focus();
    }
  };

  const handleLogin = () => {
    const enteredOtp = userOtp.join("");
    if (enteredOtp === expectedOtp) {
      setIsOtpValid(true);
      navigate("/myclass");
    } else {
      setIsOtpValid(false);
      setErrorMessage("Kode OTP tidak valid. Silakan coba lagi.");
    }
  };

  return (
    <div className="container" style={{ padding: "100px" }}>
      <h3
        style={{
          marginTop: "20px",
          marginLeft: "50px",
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
            <h6>
              Ketik 6 digit kode yang dikirimkan ke <b>J*****@gmail.com</b>
            </h6>
            <br />
            <div
              id="otp"
              className="inputs d-flex flex-row justify-content-center mt-2"
            >
              {userOtp.map((value, index) => (
                <input
                  key={index}
                  className="m-1 text-center form-control rounded-4"
                  style={{
                    width: "42px",
                    height: "42px",
                    border: "1px solid var(--primary-purple)",
                    color: "black",
                    fontWeight: 700,
                  }}
                  type="text"
                  id={`otp-${index + 1}`}
                  maxLength="1"
                  value={value}
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
              <button
                style={{
                  textAlign: "center",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                onClick={handleResendOtp}
              >
                Kirim Ulang OTP
              </button>
            )}
            {errorMessage && (
              <p style={{ color: "red", textAlign: "center" }}>
                {errorMessage}
              </p>
            )}
            <br />
            <Link
              to={isOtpValid ? "/myclass" : "#"}
              onClick={isOtpValid ? undefined : (e) => e.preventDefault()}
            >
              <button
                id="loginButton"
                className="btn rounded-4 text-light"
                style={{
                  backgroundColor: "var(--primary-purple)",
                  width: "100%",
                }}
                disabled={!isOtpValid}
                onClick={handleLogin}
              >
                Masuk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
