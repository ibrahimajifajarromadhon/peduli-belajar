import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-hot-toast';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        email,
      });

      let config = {
        method: "post",
        url: `${import.meta.env.VITE_API}/api/user/reset-password/request?email=${email}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      if (response.status == 200) {
        toast.success("Tautan reset password terkirim!");
      } else {
        toast.error("Email tidak terdaftar. Silakan coba dengan email lain.");
      }
    } catch (error) {
      toast.error("Email tidak terdaftar. Silakan coba dengan email lain.");
    }
  };

  return (
    
    <div className="register w-50 p-3 d-flex flex-column justify-content-center" style={{fontFamily:"Montserrat"}}>
      <Link
            to={`/login`}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <a
              className="d-flex"
              href="#"
              style={{ textDecoration: "none", color: "black" }}
            >
              <FaArrowLeft
                style={{ marginTop: "30px", marginBottom: "10px", color: `var(--primary-purple)`,
              }}
              />
              <p
                style={{
                  margin: "0px",
                  marginTop: "28px",
                  fontWeight: "700",
                  marginLeft: "15px",
                  marginBottom: "50px",
                  color: `var(--primary-purple)`,
                }}
              >
                Kembali ke Login
              </p>
            </a>
          </Link>
      <form onSubmit={onSubmit}>
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

        <div className="kirim mb-3">
          <button
            className="btn rounded-4 text-light"
            style={{ backgroundColor: `var(--primary-purple)`, fontFamily:"Montserrat", width: "100%", marginTop: "1em",
          }}
            type="submit"
          >
            Kirim
          </button>
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

          .kirim button {
            font-family: Poppins;
            font-size: 16px;
            font-weight: 500;
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

export default ForgotPassword;
