// import React, { useState } from "react";
// import SearchIcon from "../assets/bx_search-alt.svg";

// function NavbarAdmin() {
//   const [isSearchVisible, setIsSearchVisible] = useState(false);

//   const toggleSearch = () => {
//     setIsSearchVisible(!isSearchVisible);
//   };
//   return (
//     <nav
//       className="navbar w-100"
//       style={{ backgroundColor: `var(--primary-young-blue)`, height: "100px" }}
//     >
//       <div className="container d-flex justify-content-between">
//         <a
//           className="navbar-brand text-center m-0 px-2"
//           style={{ fontSize: "1.7em", fontWeight: "bold" }}
//         >
//           <span className="d-md-flex d-none">Hey,Admin</span>
//         </a>
//         <form
//           className={`d-flex ${isSearchVisible ? "" : "active"}`}
//           role="search"
//           style={{ position: "relative" }}
//         >
//           {window.innerWidth <= 628 && isSearchVisible && (
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Cari"
//               aria-label="Search"
//               style={{
//                 paddingRight: "40px",
//                 height: "3em",
//                 width: "350%",
//               }}
//             />
//           )}
//           <img
//             src={SearchIcon}
//             alt="Search Icon"
//             onClick={toggleSearch}
//             style={{
//               position: "absolute",
//               right: "20px",
//               top: "50%",
//               transform: "translateY(-50%)",
//               width: "2em",
//               height: "2em",
//               backgroundColor: `var(--primary-purple)`,
//               borderRadius: "20%",
//               padding: "5px",
//               cursor: "pointer",
//             }}
//           />
//         </form>
//       </div>
//     </nav>
//   );
// }

// export default NavbarAdmin;
import React, { useState } from "react";
import SearchIcon from "../assets/bx_search-alt.svg";

function NavbarAdmin() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchInputChange = (e) => {
    // Handle search input change if needed
  };

  return (
    <nav
      className="navbar w-100"
      style={{ backgroundColor: `var(--primary-young-blue)`, height: "100px" }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a
          className="navbar-brand text-center m-0 px-2"
          style={{ fontSize: "1.7em", fontWeight: "bold" }}
        >
          <span className="d-md-flex d-none">Hey, Admin</span>
        </a>
        <div
          className={`d-flex align-items-center ${isSearchVisible ? "" : "active"}`}
        >
          {window.innerWidth <= 628 ? (
            <img
              src={SearchIcon}
              alt="Search Icon"
              onClick={toggleSearch}
              style={{
                width: "2em",
                height: "2em",
                backgroundColor: `var(--primary-purple)`,
                borderRadius: "20%",
                padding: "5px",
                cursor: "pointer",
              }}
            />
          ) : (
            <form
              className="d-flex"
              role="search"
              style={{ position: "relative" }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Cari"
                aria-label="Search"
                onChange={handleSearchInputChange}
              />
              <img
                src={SearchIcon}
                alt="Search Icon"
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "2em",
                  height: "2em",
                  backgroundColor: `var(--primary-purple)`,
                  borderRadius: "20%",
                  padding: "5px",
                  cursor: "pointer",
                }}
              />
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarAdmin;
