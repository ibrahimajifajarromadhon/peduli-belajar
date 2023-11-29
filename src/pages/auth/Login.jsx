import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="register w-50 p-3 d-flex flex-column justify-content-center">
      <h4 style={{ color: `var(--primary-purple)`, textAlign: "center" }}>Masuk</h4>
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
          to={"/login"}
          className="btn rounded-4 text-light"
          style={{ backgroundColor: `var(--primary-purple)`, width: "100%" }}
        >
          Masuk
        </Link>
      </div>
      <hr />
      <div className="text-center">
        <p>
          Belum punya akun?{" "}
          <span>
            <Link to={"/Register"} style={{ textDecoration: "none", color: `var(--primary-purple)`, fontWeight: "bold" }}>
              Daftar di sini
            </Link>
          </span>
        </p>
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

export default Login;
