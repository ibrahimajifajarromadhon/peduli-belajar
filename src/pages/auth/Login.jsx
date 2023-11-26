import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <p>form login</p>
      <p>jobdesk yul</p>
      <Link to={"/register"} className="btn btn-primary">Go to register</Link>
    </div>
  );
}

export default Login;
