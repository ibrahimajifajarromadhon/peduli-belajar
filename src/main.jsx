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
// import WebHomepage from "./pages/user/WebHomepage.jsx";
import Authenticaton from "./layout/Authenticaton.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import User from "./layout/User.jsx";
import MyClassHomepage from "./pages/user/MyClassHomepage.jsx";
import PremiumClassHomepage from "./pages/user/PremiumClassHomepage.jsx";
import LoginAdmin from "./pages/auth/LoginAdmin.jsx";
import DetailCourse from "./pages/user/DetailCourse.jsx";
import FreeClassHomepage from "./pages/user/FreeClassHomepage.jsx";
import AllCourseHomepage from "./pages/user/AllCourseHomepage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />} path="/welcome"></Route>

      <Route element={<Authenticaton />}>
        <Route element={<LoginAdmin />} path="/loginAdmin"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Register />} path="/register"></Route>
      </Route>

      <Route element={<Admin />} path="/admin">
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route element={<AdminDashboard />} path="dashboard"></Route>
        <Route element={<ManageClassAdmin />} path="class"></Route>
      </Route>

      <Route element={<User />} path="/">
        <Route index element={<Navigate to="myclass" replace />} />
        <Route element={<MyClassHomepage />} path="myclass"></Route>
        <Route element={<AllCourseHomepage />} path="allCourseClass"></Route>
        <Route element={<PremiumClassHomepage />} path="premiumClass"></Route>
        <Route element={<FreeClassHomepage />} path="freeClass"></Route>
        <Route element={<DetailCourse />} path="detailClass"></Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
