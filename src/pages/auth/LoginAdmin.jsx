import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";

function LoginAdmin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validation, setValidation] = useState([]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        email,
        password,
      });

      let config = {
        method: "post",
        url: `${import.meta.env.VITE_API}/api/auth/signin`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      Cookies.set("token", token);

      navigate("/admin/dashboard");

    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      setValidation(error.response.data);
    }
  };

  return (
    <div className="register w-50 p-3 d-flex flex-column justify-content-center">
      <h4 style={{ color: `var(--primary-purple)`, textAlign: "center", paddingBottom:"20px", fontWeight:"700" }}>
        Login Admin    
      </h4>
      <form onSubmit={onSubmit}>
      <div className="mb-3  position-relative">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Email Admin
        </label>
        <input
          type="email"
          className="form-control rounded-4"
          id="formGroupExampleInput2"
          placeholder="Email Admin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3  position-relative">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          className="form-control rounded-4"
          id="formGroupExampleInput4"
          placeholder="Masukkan Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
                <span
          className="position-absolute top-50 end-0 translate-middle-y"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <FaEyeSlash
              style={{ marginRight: "15px", marginTop: "35px", color: "grey" }}
            />
          ) : (
            <FaEye
              style={{ marginRight: "15px", marginTop: "35px", color: "grey" }}
            />
          )}
        </span>
      </div>
      <div className="mb-3">
        <br />
        <button
          // to={"/admin/dashboard"}
          className="btn rounded-4 text-light"
          style={{ backgroundColor: `var(--primary-purple)`, width: "100%" }}
        >
          Masuk
        </button>
      </div>
      </form>
      <div className="text-center">
        <p>
          Belum punya akun?{" "}
          <span>
            <Link
              to={`/registerAdmin`}
              style={{
                textDecoration: "none",
                color: `var(--primary-purple)`,
                fontWeight: "bold",
              }}
            >
              Daftar di sini
            </Link>
          </span>
        </p>
        {validation.message && (
            <div className="btn button-danger">{validation.message}</div>
          )}
      </div>

      <style >
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
        `}
      </style>
    </div>
  );
}

export default LoginAdmin;
