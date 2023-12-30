import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from 'react-hot-toast';
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
import Authenticaton from "./layout/Authenticaton.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import User from "./layout/User.jsx";
import MyClassHomepage from "./pages/user/MyClassHomepage.jsx";
import DetailCourse from "./pages/user/DetailCourse.jsx";
import AllCourseHomepage from "./pages/user/AllCourseHomepage.jsx";
import BayarCourse from "./pages/user/BayarCourse.jsx";
import SuccessBayarCourse from "./pages/user/SuccessBayarCourse.jsx";
import UserProfile from "./pages/user/UserProfile.jsx";
import ChangePassword from "./components/user/ChangePassword.jsx";
import PaymentHistory from "./components/user/PaymentHistory.jsx";
import MyProfile from "./components/user/MyProfile.jsx";
import Notification from "./pages/user/Notification.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import Otp from "./pages/auth/Otp.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Authenticaton />}>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<ForgotPassword />} path="/forgotPassword"></Route>
        <Route
          element={<ResetPassword />}
          path="/resetPassword/:token"
        ></Route>
        <Route element={<Otp />} path="/otp/:email"></Route>
      </Route>

      <Route element={<Admin />} path="/admin">
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route element={<AdminDashboard />} path="dashboard"></Route>
        <Route element={<ManageClassAdmin />} path="class"></Route>
      </Route>

      <Route element={<User />} path="/">
        <Route index element={<Navigate to="welcome" replace />} />
        <Route element={<App />} path="welcome"></Route>
        <Route element={<MyClassHomepage />} path="myClass"></Route>{" "}
        <Route
          element={<AllCourseHomepage />}
          path="allCourseClass"
        ></Route>{" "}
        <Route element={<BayarCourse />} path="bayarCourse"></Route>
        <Route
          element={<SuccessBayarCourse />}
          path="successBayarCourse"
        ></Route>
        <Route
          element={<DetailCourse />}
          path="detailClass/:courseCode"
        ></Route>
        <Route element={<UserProfile />} path="userProfile">
          <Route index element={<Navigate to="myProfile" replace />} />
          <Route element={<MyProfile />} path="myProfile"></Route>
          <Route element={<ChangePassword />} path="changePassword"></Route>
          <Route element={<PaymentHistory />} path="paymentHistory"></Route>
        </Route>
        <Route element={<Notification />} path="notification"></Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
  </React.StrictMode>
);
