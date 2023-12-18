import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordValid, setPasswordValid] = useState(false);
  // const [validEmail, setValidEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const [validation, setValidation] = useState([]);

  // const handleEmailChange = (event) => {
  //   const newEmail = event.target.value;
  //   setEmail(newEmail);

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (emailRegex.test(newEmail)) {
  //     setValidEmail(true);
  //   } else {
  //     setValidEmail(false);
  //   }
  // };

  // const handlePasswordChange = (event) => {
  //   const newPassword = event.target.value;
  //   setPassword(newPassword);

  //   if (newPassword.length >= 8) {
  //     setPasswordValid(true);
  //   } else {
  //     setPasswordValid(false);
  //   }
  // };

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
      toast.success("Login berhasil!");

      navigate("/allCourseClass");

    } catch (error) {
        toast.error("Login gagal!, silahkan coba lagi");
    }
  };

  return (
    <div className="register w-50 p-3 d-flex flex-column justify-content-center">
      <form onSubmit={onSubmit}> 
      <h4 style={{ color: `var(--primary-purple)`, paddingBottom:"20px", fontWeight:"700"  }}>
        Masuk
      </h4>
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
          onChange={(e) => setEmail(e.target.value)}
          // onChange={handleEmailChange}
        />
      </div>
      <div className="mb-3 position-relative">
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
          // onChange={handlePasswordChange}
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
        
        <button
          className="btn rounded-4 text-light"
          style={{ backgroundColor: `var(--primary-purple)`, width: "100%" }}
          type="submit"
        >
          Masuk
        </button>
      </div>
      <div className="text-center">
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
        {/* {password.length > 0 && !passwordValid && (
          <div className="btn button-danger">Password min 8 karakter!</div>
        )} */}
                  {/* {validation.message && (
            <div className="btn button-danger">{validation.message}</div>
          )} */}
      </div>
      </form>

      {/* Media Query for Large Screens */}
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
            color: #fff;
          }
        `}
      </style>
    </div>
  );
}

export default Login;
