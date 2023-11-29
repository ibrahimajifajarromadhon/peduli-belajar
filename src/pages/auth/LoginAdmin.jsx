import React from "react";
import { Link } from "react-router-dom";

function LoginAdmin() {
  return (
    <div className="register w-50 p-3 d-flex flex-column justify-content-center">
      <h4 style={{ color: `var(--primary-purple)`, textAlign: "center" }}>
        Masuk Sebagai Admin
      </h4>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          ID Admin
        </label>
        <input
          type="email"
          className="form-control rounded-4"
          id="formGroupExampleInput2"
          placeholder="ID Admin"
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
          placeholder="Masukkan Password"
        />
      </div>
      <div className="mb-3">
        <hr />
        <br />
        <Link
          to={"/admin/dashboard"}
          className="btn rounded-4 text-light"
          style={{ backgroundColor: `var(--primary-purple)`, width: "100%" }}
        >
          Masuk
        </Link>
      </div>

      {/* Media Query for Large Screens */}
      <style jsx>
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

export default LoginAdmin;
