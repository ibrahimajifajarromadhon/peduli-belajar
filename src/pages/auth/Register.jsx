import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validNomor, setValidNomor] = useState(false);
  const navigate = useNavigate();

  const visiblePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        fullName,
        email,
        noTelp,
        password,
      });

      let config = {
        method: "POST",
        url: `${import.meta.env.VITE_API}/api/auth/signup`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data;

      Cookies.set("token", token);
      toast.success("Kode OTP berhasil dikirim!");

      navigate(`/otp/${email}`);
    } catch (error) {
      toast.error("Registrasi gagal, silahkan coba lagi!");
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(newEmail)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const handleNomorChange = (event) => {
    const newNomor = event.target.value;
    setNoTelp(newNomor);

    if (newNomor.length >= 12) {
      setValidNomor(true);
    } else {
      setValidNomor(false);
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (newPassword.length >= 8) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  return (
    <div
      className="register w-50 p-3 d-flex flex-column justify-content-center"
      style={{ fontFamily: "Montserrat" }}
    >
      <form onSubmit={onSubmit}>
        <h4
          style={{
            color: `var(--primary-purple)`,
            paddingBottom: "20px",
            fontWeight: "700",
          }}
        >
          Daftar
        </h4>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Nama
          </label>
          <input
            type="text"
            className="form-control rounded-4"
            id="formGroupExampleInput"
            placeholder="Nama Lengkap"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 position-relative">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control rounded-4"
            id="formGroupExampleInput2"
            placeholder="Contoh: johndoe@gmail.com"
            value={email}
            onChange={(e) => {
              handleEmailChange(e);
              setEmail(e.target.value);
            }}
            required
          />
          {email.length > 0 && (
            <span className="position-absolute top-50 end-0 translate-middle-y">
              {validEmail ? (
                <FaCheckCircle
                  className="text-success"
                  style={{ marginRight: "10px", marginTop: "30px" }}
                />
              ) : (
                <FaTimesCircle
                  className="text-danger"
                  style={{ marginRight: "10px", marginTop: "30px" }}
                />
              )}
            </span>
          )}
        </div>

        <div className="mb-3 position-relative">
          <label htmlFor="formGroupExampleInput3" className="form-label">
            Nomor Telepon
          </label>
          <input
            type="tel"
            className="form-control rounded-4"
            id="formGroupExampleInput3"
            placeholder="08..."
            value={noTelp}
            onChange={(e) => {
              handleNomorChange(e);
              setNoTelp(e.target.value);
            }}
            required
          />
          {noTelp.length > 0 && (
            <span className="position-absolute top-50 end-0 translate-middle-y">
              {validNomor ? (
                <FaCheckCircle
                  className="text-success"
                  style={{ marginRight: "10px", marginTop: "30px" }}
                />
              ) : (
                <FaTimesCircle
                  className="text-danger"
                  style={{ marginRight: "10px", marginTop: "30px" }}
                />
              )}
            </span>
          )}
        </div>

        <div className="mb-3 position-relative">
          <label htmlFor="formGroupExampleInput4" className="form-label">
            Password
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            className="form-control rounded-4"
            id="formGroupExampleInput4"
            placeholder="Buat Password"
            value={password}
            onChange={(e) => {
              handlePasswordChange(e);
              setPassword(e.target.value);
            }}
            required
          />
          <span
            className="position-absolute top-50 end-0 translate-middle-y"
            onClick={visiblePassword}
          >
            {passwordVisible ? (
              <FaEyeSlash
                style={{
                  marginRight: "15px",
                  marginTop: "30px",
                  color: "grey",
                }}
              />
            ) : (
              <FaEye
                style={{
                  marginRight: "15px",
                  marginTop: "30px",
                  color: "grey",
                }}
              />
            )}
          </span>
        </div>

        <div className="mb-3">
          <button
            className="btn rounded-4 text-light"
            style={{
              backgroundColor: `var(--primary-purple)`,
              width: "100%",
              fontFamily: "Montserrat",
            }}
            type="submit"
          >
            Daftar
          </button>
        </div>
        <div className="mt-4 text-center">
          <p>
            Sudah punya akun?{" "}
            <span>
              <Link
                to={"/login"}
                style={{
                  textDecoration: "none",
                  color: `var(--primary-purple)`,
                  fontWeight: "bold",
                }}
              >
                Masuk di sini
              </Link>
            </span>
          </p>
          {password.length > 0 && !passwordValid && (
            <div className="btn button-danger">Password min 8 karakter!</div>
          )}
        </div>
      </form>

      <style>
        {`
          @media (max-width: 628px) {
            .register {
              width: 100% !important;
              height: 100% !important;
              background-color: var(--primary-young-blue) !important;
            }
          }

          input {
            height: 48px;
          }

          p {
            font-family: Poppins;
            font-size: 14px;
            font-weight: 400;
          }

          .form-label {
            font-family: Poppins;
            font-size: 15px;
            font-weight: 400;
            text-align: left;
          }

          .button-danger {
            background-color: #FF0000;
            color: #fff;
            border-radius: 15px;
            padding: 15px;
            font-weight: 500;
            width: 60%;
            margin-top: 20px;
          }

          .button-danger:hover {
            background-color: #FF0000;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default Register;
