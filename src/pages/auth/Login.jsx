import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      toast.success('Login Berhasil!')

      const roler = response.data.data.role;
      if (roler === "USER") {
        navigate("/allCourseClass");
      } else if (roler === "ADMIN") {
        navigate("/admin");
      }
    } catch (error) {
      toast.error("User tidak ditemukan!");
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
          Masuk
        </h4>
        <div className="mb-3 position-relative" style={{fontFamily:"Montserrat"}}>
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control rounded-4"
            id="formGroupExampleInput2"
            placeholder="Contoh: johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3 position-relative" style={{fontFamily:"Montserrat"}}>
          <div className="d-flex justify-content-between">
            <label htmlFor="formGroupExampleInput4" className="form-label">
              Password
            </label>
            <Link
              to={`/forgotPassword`}
              style={{
                textDecoration: "none",
                color: `var(--primary-purple)`,
                fontFamily: "Poppins",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              Lupa Kata Sandi?
            </Link>
          </div>
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
                style={{
                  marginRight: "15px",
                  marginTop: "35px",
                  color: "grey",
                }}
              />
            ) : (
              <FaEye
                style={{
                  marginRight: "15px",
                  marginTop: "35px",
                  color: "grey",
                }}
              />
            )}
          </span>
        </div>

        <div className="mb-3">
          <button
            className="btn rounded-4 text-light"
            style={{ backgroundColor: `var(--primary-purple)`, width: "100%", fontFamily:"Montserrat" }}
            type="submit"
          >
            Masuk
          </button>
        </div>
        <div className="mt-4 text-center">
          <p>
            Belum punya akun?{" "}
            <span>
              <Link
                to={`/register`}
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
            color: #fff;
          }
        `}
      </style>
    </div>
  );
}

export default Login;
