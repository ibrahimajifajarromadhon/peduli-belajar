import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { otpRequest } from "../../api/otp";
import verifyOtp from "../../api/verifyOtp";

const Otp = () => {
  const [counter, setCounter] = useState(60);
  const [userOtp, setUserOtp] = useState("");
  const [expectedOtp, setExpectedOtp] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [verificationInProgress, setVerificationInProgress] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const userEmail = location.state?.email || "";

  // useEffect(() => {
  //   if (!otpSent && counter > 0) {
  //     otpRequest(userEmail).then((response) => {
  //       setExpectedOtp(response.otp);
  //       setOtpSent(true);
  //     });
  //   }
  //   if (counter > 0 && !resendDisabled) {
  //     const timer = setTimeout(() => setCounter(counter - 1), 1000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [counter, userEmail, resendDisabled]);
  useEffect(() => {
    if (otpSent && counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  
    if (!otpSent && counter === 0) {
      otpRequest(userEmail).then((response) => {
        setExpectedOtp(response.otp);
        setOtpSent(true); // Tandai bahwa OTP sudah terkirim
      });
    }
  }, [counter, userEmail, otpSent]);
  

  useEffect(() => {
    function OTPInput() {
      const inputs = document.querySelectorAll("#otp > *[id]");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keydown", function (event) {
          if (event.key === "Backspace") {
            inputs[i].value = "";
            if (i !== 0) inputs[i - 1].focus();
          } else {
            if (i === inputs.length - 1 && inputs[i].value !== "") {
              setUserOtp((prevOtp) => prevOtp + inputs[i].value);
              return true;
            } else if (event.keyCode > 47 && event.keyCode < 58) {
              inputs[i].value = event.key;
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            } else if (event.keyCode > 64 && event.keyCode < 91) {
              inputs[i].value = String.fromCharCode(event.keyCode);
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            }
          }
        });
      }
    }

    OTPInput();
  }, []);

  // const handleResendOtp = () => {
  //   if (!otpSent) {
  //     setCounter(60);
  //     setUserOtp("");
  //     setResendDisabled(true);

  //     otpRequest(userEmail)
  //       .then((response) => {
  //         setExpectedOtp(response.otp);
  //       })
  //       .finally(() => {
  //         setResendDisabled(false);
  //       });
  //   }
  // };

  const handleResendOtp = () => {
    setCounter(60);
    setUserOtp("");
    setResendDisabled(true);
  
    setOtpSent(false); // Reset state otpSent
    otpRequest(userEmail)
      .then((response) => {
        setExpectedOtp(response.otp);
      })
      .finally(() => {
        setResendDisabled(false);
      });
  };
  
  
  const handleLogin = () => {
    if (userOtp === expectedOtp && userOtp !== "") {
      setVerificationInProgress(true);

      verifyOtp({ userEmail, userOtp })
        .then((verificationResponse) => {
          if (verificationResponse.success) {
            console.log("Login Successful!");
            navigate("/login");
          } else {
            console.log("Invalid OTP. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Verification error:", error);
        })
        .finally(() => {
          setVerificationInProgress(false);
        });
    } else {
      console.log("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="" style={{ padding: "2em" }}>
      <Link to="/register">
        <FaArrowLeft style={{ color: "var(--neutral-black)" }} />
      </Link>

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
              Ketik 6 digit kode yang dikirimkan ke <b>J*****@gmail.com</b>
            </h6>
            <br />
            <div
              id="otp"
              className="inputs d-flex flex-row justify-content-center mt-2 gap-2"
            >
              {[...Array(6).keys()].map((index) => (
                <input
                  key={index}
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
                onClick={handleResendOtp}
              >
                Kirim Ulang OTP
              </span>
            )}
            <br />
            <Link>
              <button
                id="loginButton"
                className="btn rounded-4 text-light"
                style={{
                  backgroundColor: "var(--primary-purple)",
                  width: "100%",
                }}
                onClick={handleLogin}
                disabled={userOtp === "" || verificationInProgress}
              >
                {verificationInProgress ? "memverifikasi..." : "Masuk"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
