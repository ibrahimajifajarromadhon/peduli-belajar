import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SiStudyverse } from "react-icons/si";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineProfile } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from 'react-hot-toast';

function SidebarAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  useEffect (() => {
    if (Cookies.get('token')) {
      setIsLoggedIn(true)
    }
  })
  return (
    <>
      <div
        className="d-lg-flex flex-column flex-shrink-0 p-3 p-4 vh-100 d-none"
        style={{ backgroundColor: `var(--primary-purple)`, width: "300px" }}
      >
        <NavLink
          to="dashboard"
          className="d-flex align-items-center  text-white text-decoration-none sidebar"
        >
          <span className="fs-2 d-flex justify-content-start">
            <SiStudyverse style={{width:"1.5em", height:"1.5em"}} />
          </span>
          <span className="fs-4 mx-2 my-3">Peduli Belajar</span>
        </NavLink>
        <br />
        <ul className="nav nav-pills flex-column mb-auto sidebar-item mt-1">
          <li className="nav-item py-1">
            <NavLink
              to={`/admin/dashboard`}
              className="nav-link text-light fs-5 d-flex align-items-center"
              activeclassname="active"
            >
              <LuLayoutDashboard />
              <span className="mx-3">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item py-1">
            <NavLink
              to="class"
              className="nav-link text-light fs-5 d-flex align-items-center"
              activeclassname="active"
            >
              <AiOutlineProfile />
              <span className="mx-3">Kelola Kelas</span>
            </NavLink>
          </li>
          <li className="nav-item rounded py-1">
          <Link to={`/login`} style={{ color: `var(--primary-purple)`}}onClick={() => {
                Cookies.remove('token');
                setIsLoggedIn(false);
                toast.success("Logout berhasil!");
                return navigate("/");
              }} >
            <p href="#" className="nav-link text-white fs-5">
              <FiLogOut />
              <span className="mx-3">Log Out</span>
            </p>
          </Link>
          </li>
        </ul>
      </div>

      <div className="d-flex flex-row bg-transparant w-100 z-1 p-4 d-lg-none" style={{ top:"0px", left:"0px"}}>
        <ul className="nav nav-pills mb-auto w-100">
          <li className="nav-item">
            <NavLink
              to="dashboard"
              className="nav-link fs-5 d-flex align-items-center"
              activeclassname="active"
            >
              <LuLayoutDashboard className="text-dark" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="class"
              className="nav-link text-light fs-5 d-flex align-items-center "
              activeclassname="active"
            >
              <AiOutlineProfile className="text-dark" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
            style={{}}
              to={`/login`}
              className="nav-link text-light fs-5 d-flex align-items-center "
              activeclassname="active"
              onClick={() => {
                Cookies.remove('token');
                setIsLoggedIn(false);
                toast.success("Logout berhasil!");
                return navigate("/");
              }} 
            >
              <FiLogOut className="text-danger" />
            </NavLink>
          </li>
        </ul>
      </div>
      <style>{`
      .sidebar {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 700;
      }

      .sidebar-item {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 600;
        text-align: left;
      }
      `}</style>
    </>
  );
}

export default SidebarAdmin;


// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { SiStudyverse } from "react-icons/si";
// import { LuLayoutDashboard } from "react-icons/lu";
// import { AiOutlineProfile } from "react-icons/ai";
// import { FiLogOut } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import Cookies from "js-cookie";
// import { toast } from 'react-hot-toast';

// function SidebarAdmin() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [activeNavItem, setActiveNavItem] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (Cookies.get('token')) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleItemClick = (item) => {
//     setActiveNavItem(item);
//   };

//   return (
//     <>
//       <div
//         className="d-lg-flex flex-column flex-shrink-0 p-3 p-4 vh-100 d-none"
//         style={{ backgroundColor: `var(--primary-purple)`, width: "300px" }}
//       >
//         <NavLink
//           to="dashboard"
//           className="d-flex align-items-center  text-white text-decoration-none sidebar"
//         >
//           <span className="fs-2 d-flex justify-content-start">
//             <SiStudyverse style={{ width: "1.5em", height: "1.5em" }} />
//           </span>
//           <span className="fs-4 mx-2 my-3">Peduli Belajar</span>
//         </NavLink>
//         <br />
//         <ul className="nav nav-pills flex-column mb-auto sidebar-item mt-1">
//           <li className="nav-item py-1">
//             <NavLink
//               to={`/admin/dashboard`}
//               className={`nav-link text-light fs-5 d-flex align-items-center ${
//                 activeNavItem === "dashboard" ? "active" : ""
//               }`}
//               onClick={() => handleItemClick("dashboard")}
//             >
//               <LuLayoutDashboard />
//               <span className="mx-3">Dashboard</span>
//             </NavLink>
//           </li>
//           <li className="nav-item py-1">
//             <NavLink
//               to="class"
//               className={`nav-link text-light fs-5 d-flex align-items-center ${
//                 activeNavItem === "class" ? "active" : ""
//               }`}
//               onClick={() => handleItemClick("class")}
//             >
//               <AiOutlineProfile />
//               <span className="mx-3">Kelola Kelas</span>
//             </NavLink>
//           </li>
//           <li className="nav-item rounded py-1">
//             <Link
//               to={`/login`}
//               style={{ color: `var(--primary-purple)` }}
//               onClick={() => {
//                 Cookies.remove('token');
//                 setIsLoggedIn(false);
//                 toast.success("Logout berhasil!");
//                 return navigate("/");
//               }}
//             >
//               <p href="#" className="nav-link text-white fs-5">
//                 <FiLogOut />
//                 <span className="mx-3">Log Out</span>
//               </p>
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <div className="d-flex flex-row bg-transparant w-100 z-1 p-4 d-lg-none" style={{ top: "0px", left: "0px" }}>
//         <ul className="nav nav-pills mb-auto w-100 d-flex flex-row">
//           <li className="nav-item">
//             <NavLink
//               to="dashboard"
//               className="nav-link fs-5 d-flex align-items-center"
//               activeClassName="active"
//             >
//               <LuLayoutDashboard className="text-dark" />
//               {activeNavItem !== "dashboard" && <span className="mx-3">Dashboard</span>}
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               to="class"
//               className="nav-link text-light fs-5 d-flex align-items-center "
//               activeClassName="active"
//             >
//               <AiOutlineProfile className="text-dark" />
//               {activeNavItem !== "class" && <span className="mx-3">Kelola Kelas</span>}
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               to={`/login`}
//               className="nav-link text-light fs-5 d-flex align-items-center "
//               activeClassName="active"
//               onClick={() => {
//                 Cookies.remove('token');
//                 setIsLoggedIn(false);
//                 toast.success("Logout berhasil!");
//                 return navigate("/");
//               }}
//             >
//               <FiLogOut className="text-danger" />
//               {activeNavItem !== "logout" && <span className="mx-3">Log Out</span>}
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <style>{`
//       .sidebar {
//         font-family: Montserrat;
//         font-size: 16px;
//         font-weight: 700;
//       }

//       .sidebar-item {
//         font-family: Montserrat;
//         font-size: 16px;
//         font-weight: 600;
//         text-align: left;
//       }
//       `}</style>
//     </>
//   );
// }

// export default SidebarAdmin;
