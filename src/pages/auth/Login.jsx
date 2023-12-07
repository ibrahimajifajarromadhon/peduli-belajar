import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordValid, setPasswordValid] = useState(false);
  // const [validEmail, setValidEmail] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  // const [isRegisteredEmail, setIsRegisteredEmail] = useState(true);
  // const [incorrectPassword, setIncorrectPassword] = useState(false);
  // const navigate = useNavigate();

  // const handleEmailChange = (event) => {
  //   const newEmail = event.target.value;
  //   setEmail(newEmail);

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (emailRegex.test(newEmail)) {
  //     setValidEmail(true);
  //     setIsRegisteredEmail(checkIfEmailIsRegistered(newEmail));
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

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  // const checkIfEmailIsRegistered = (checkEmail) => {
  //   const registeredEmails = ["test@user.com"];
  //   return registeredEmails.includes(checkEmail);
  // };

  // const handleLogin = () => {
  //   const isAuthenticated = authenticateUser(email, password);

  //   if (!isAuthenticated) {
  //     setIncorrectPassword(true);
  //   } else {
  //     setIncorrectPassword(false);
  //     navigate("/myClass");
  //   }
  // };

  // const authenticateUser = (enteredEmail, enteredPassword) => {
  //   return enteredEmail === "test@user.com" && enteredPassword === "password";
  // };
  const handleLogin = async () => {
    try {
      const response = await fetch('https://peduli-belajar-backend-production.up.railway.app/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Registrasi berhasil
        const data = await response.json();
        console.log('Login berhasil:', data);
        // Lakukan sesuatu setelah registrasi berhasil
      } else {
        // Registrasi gagal
        console.log('Login gagal');
        // Lakukan sesuatu jika registrasi gagal
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      // Lakukan sesuatu jika terjadi kesalahan
    }
  }
  return (
    <div className="register w-50 p-3 d-flex flex-column justify-content-center">
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}> 
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
        {/* {email.length > 0 && (
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
        )} */}
      </div>
      <div className="mb-3 position-relative">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Password
        </label>
        <input
          // type={showPassword ? "text" : "password"}
          className="form-control rounded-4"
          id="formGroupExampleInput4"
          placeholder="Masukkan Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // onChange={handlePasswordChange}
        />
        <span
          className="position-absolute top-50 end-0 translate-middle-y"
          // onClick={togglePasswordVisibility}
        >
          {/* {showPassword ? (
            <FaEyeSlash
              style={{ marginRight: "15px", marginTop: "35px", color: "grey" }}
            />
          ) : (
            <FaEye
              style={{ marginRight: "15px", marginTop: "35px", color: "grey" }}
            />
          )} */}
        </span>
      </div>
      <div className="mb-3">
        
        <button
          // to={`/allCourseClass`}
          className="btn rounded-4 text-light"
          style={{ backgroundColor: `var(--primary-purple)`, width: "100%" }}
          // onClick={handleLogin}
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
        )}
        {!isRegisteredEmail && (
          <div className="btn button-danger">Alamat email tidak terdaftar!</div>
        )}
        {incorrectPassword && (
          <div className="btn button-danger">Maaf, kata sandi salah!</div>
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
