import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function RegisterAdmin() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validNomor, setValidNomor] = useState(false);
  const navigate = useNavigate();

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
        url: `${import.meta.env.VITE_API}/api/auth/signup/admin`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      console.log({data:data})

      const response = await axios.request(config);
      const { token } = response.data;

      localStorage.setItem("token", token);

      navigate(`/otpAdmin/${email}`);
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
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
    <div className="register w-50 p-3 d-flex flex-column justify-content-center">
      <form onSubmit={onSubmit}>
      <h4
        style={{
          color: `var(--primary-purple)`,
          paddingBottom: "20px",
          fontWeight: "700",
        }}
      >
        Daftar Admin
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
          type="password"
          className="form-control rounded-4"
          id="formGroupExampleInput4"
          placeholder="Buat Password"
          value={password}
          onChange={(e) => {
            handlePasswordChange(e);
            setPassword(e.target.value);
          }}
        />
        {password.length > 0 && (
          <span className="position-absolute top-50 end-0 translate-middle-y">
            {passwordValid ? (
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

      <div className="mb-3">
        <button
          className="btn rounded-4 text-light"
          style={{ backgroundColor: `var(--primary-purple)`, width: "100%" }}
          type="submit"
        >
          Daftar
        </button>
      </div>
      <div className="text-center">
        <p>
          Sudah punya akun?{" "}
          <span>
            <Link
              to={"/loginAdmin"}
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

export default RegisterAdmin;

