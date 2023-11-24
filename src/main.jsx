import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Admin from "./layout/Admin.jsx";
import ManageClassAdmin from "./pages/ManageClassAdmin.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route element={<DashboarWeb />}></Route> */}

      {/* <Route element={<Authentication />}>
        <Route element={<Login />}></Route>
        userlogin/user
        adminlogin/admin
        <Route element={<Register />}></Route>
      </Route> */}

      <Route element={<Admin />} path="/admin">
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route element={<AdminDashboard />} path="dashboard"></Route>
        <Route element={<ManageClassAdmin />} path="class"></Route>
      </Route>

      {/* <Route element={<User />} >

      </Route> */}
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
