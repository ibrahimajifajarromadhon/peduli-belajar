import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <p>form register</p>
      <Link to={"/login"} className="btn btn-success">
        back to login
      </Link>
    </div>
  );
}

export default Register;
