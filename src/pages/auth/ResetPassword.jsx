import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleResetPassword = async () => {
    if (newPassword.length < 8) {
      toast.error("Password harus terdiri dari minimal 8 karakter!");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Password tidak cocok!");
      return;
    }

    try {
      const data = {
        password: newPassword,
        confirmPassword: confirmPassword,
      };

      const config = {
        method: "post",
        url: `${import.meta.env.VITE_API}/api/user/reset-password/${token}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      await axios.request(config);
      toast.success("Reset password berhasil!");
      navigate("/login");
    } catch (error) {
      toast.error("Gagal mereset password. Silakan coba lagi!");
    }
  };

  return (
    <div
      className="register w-50 p-3 d-flex flex-column justify-content-center"
      style={{ fontFamily: "Montserrat" }}
    >
      <h4
        style={{
          color: `var(--primary-purple)`,
          paddingBottom: "10px",
          fontWeight: "700",
        }}
      >
        Reset Password
      </h4>
      <div className="mb-3 position-relative">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Masukkan Password Baru
        </label>
        <input
          type={showPassword ? "text" : "password"}
          className="form-control rounded-4"
          id="formGroupExampleInput2"
          placeholder="************"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
        <span
          className="position-absolute top-50 end-0 translate-middle-y"
          onClick={togglePassword}
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
      <div className="mb-4 position-relative">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Ulangi Password Baru
        </label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          className="form-control rounded-4"
          id="formGroupExampleInput4"
          placeholder="************"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <span
          className="position-absolute top-50 end-0 translate-middle-y"
          onClick={toggleConfirmPassword}
        >
          {showConfirmPassword ? (
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
      <div className="kirim mb-3">
        <button
          onClick={handleResetPassword}
          className="btn rounded-4 text-light"
          style={{ backgroundColor: `var(--primary-purple)`, width: "100%" }}
        >
          Masuk
        </button>
      </div>

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

          p {
            font-family: Poppins;
            font-size: 14px;
            font-weight: 400;
          }

          .kirim button {
            font-family: Poppins;
            font-size: 16px;
            font-weight: 500;
          }

          .form-label {
            font-family: Poppins;
            font-size: 15px;
            font-weight: 400;
            text-align: left;
          }
        `}
      </style>
    </div>
  );
}

export default ResetPassword;
