import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register w-50 p-3 d-flex flex-column justify-content-center">
      <h4 style={{ color: `var(--primary-purple)`, textAlign: "center" }}>Daftar</h4>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Nama
        </label>
        <input
          type="text"
          className="form-control rounded-4"
          id="formGroupExampleInput"
          placeholder="Jhon Doe"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control rounded-4"
          id="formGroupExampleInput2"
          placeholder="jhonDoe@gmail.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput3" className="form-label">
          Nomor Telepon
        </label>
        <input
          type="tel"
          className="form-control rounded-4"
          id="formGroupExampleInput3"
          placeholder="+62 8...."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-4"
          id="formGroupExampleInput4"
          placeholder="........"
        />
      </div>
      <div className="mb-3">
        <Link
          to={"/otp"}
          className="btn rounded-4 text-light"
          style={{ backgroundColor: `var(--primary-purple)`, width: "100%" }}
        >
          Daftar
        </Link>
      </div>
      <hr />
      <div className="text-center">
        <p>
          Sudah punya akun?{" "}
          <span>
            <Link to={"/login"} style={{ textDecoration: "none", color: `var(--primary-purple)`, fontWeight: "bold" }}>
              Masuk di sini
            </Link>
          </span>
        </p>
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
        `}
      </style>
    </div>
  );
}

export default Register;
