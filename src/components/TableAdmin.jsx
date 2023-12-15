// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { MdEdit } from "react-icons/md";
// import { IoTrash } from "react-icons/io5";
// import deleteCourse from "../api/deleteCourse";

// const TableAdmin = ({ data, coloredColumn }) => {
// const location = useLocation();
// const isKelolaKelasRoute = location.pathname === "/admin/class";
// const columns = Object.keys(data[0]);
// const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
// const [selectedRowIndex, setSelectedRowIndex] = useState(null);

// const [isModalAddClassOpen, setIsModalAddClassOpen] = useState(false);
// const [courseToUpdate, setCourseToUpdate] = useState(null);

// useEffect(() => {
//   const handleResize = () => {
//     setIsSmallScreen(window.innerWidth < 992);
//   };

//   window.addEventListener("resize", handleResize);

//   return () => {
//     window.removeEventListener("resize", handleResize);
//   };
// }, []);

// const handleUbah = (index) => {
//   setSelectedRowIndex(index);
//   setUpdateData(data[index]);
//   setCourseToUpdate(data[index]);
//   setIsModalAddClassOpen(true);
// };

// const handleDelete = async (classCode) => {
//   try {
//     await deleteCourse(classCode);
//     console.log("data delete successfuly");
//     console.log(classCode);
//   } catch (error) {
//     console.log("error delete data");
//   }
// };

//   return (
//     <div className="table-responsive p-4">
//       {isSmallScreen ? (
//         <div className="accordion" id="accordionExample">
//           {data.map((aData, index) => (
//             <div className="accordion-item" key={index}>
//               <h2 className="accordion-header">
//                 <button
//                   className={`accordion-button ${
//                     index === 0 ? "" : "collapsed"
//                   }`}
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target={`#collapse-${index}`}
//                   aria-expanded="false"
//                   aria-controls={`collapse-${index}`}
//                 >
//                   {`${index + 1}. ${columns[0]} : ${aData[columns[0]]}`}
//                 </button>
//               </h2>
//               <div
//                 id={`collapse-${index}`}
//                 className="accordion-collapse collapse"
//               >
//                 <div className="accordion-body">
//                   {columns.map((column, columnIndex) => (
//                     <div key={columnIndex}>
//                       <strong>{column}:</strong> {aData[column]}
//                     </div>
//                   ))}
//                   {isKelolaKelasRoute && selectedRowIndex !== index && (
//                     <div className="action-buttons">
//                       <strong>Action:</strong>{" "}
//                       <button
//                         onClick={() => handleUbah(index)}
//                         className="btn rounded-pill text-light"
//                       >
//                         <span style={{ color: `var(--primary-purple)` }}>
//                           <MdEdit />
//                         </span>
//                       </button>
//                       <button
//                         onClick={() => handleDelete(aData.Kode_Kelas)}
//                         className="btn text-light rounded-pill"
//                       >
//                         <span style={{ color: `var(--allert-red)` }}>
//                           <IoTrash />
//                         </span>
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//           <style>{`
//           .accordion-item {
//             margin-bottom: 1rem;
//           }

//           .accordion-header {
//             background-color: var(--primary-purple);
//           }

//           .accordion-button {
//             color: var(--primary-purple);
//             font-weight: 500;
//           }

//           .accordion-collapse {
//             background-color: #fff;
//             border: 1px solid #ddd;
//             border-radius: 0.25rem;
//           }

//           .mb-3 {
//             margin-bottom: 1rem;
//           }

//           .action-buttons {
//             margin-top: 0.5rem;
//           }
//           .accordion-button::after {
//             background-color: var(--primary-light-grey);
//             padding: 1em;
//             border-radius: 50%;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             background-position: center;

//         }
//           `}</style>
//         </div>
//       ) : (
//         <>
//           <div style={{ padding: "0em 2em" }}>
// <table className="table p-5">
//   <thead>
//     <tr>
//       {columns.map((column) => (
//         <th
//           key={column}
//           scope="col"
//           style={{
//             backgroundColor: `var(--primary-young-blue)`,
//           }}
//         >
//           {column}
//         </th>
//       ))}
//       {isKelolaKelasRoute && (
//         <th
//           className="d-flex justify-content-center"
//           style={{
//             backgroundColor: `var(--primary-young-blue)`,
//           }}
//         >
//           Action
//         </th>
//       )}
//     </tr>
//   </thead>
//   <tbody>
//     {data.map((aData, index) => (
//       <tr key={aData.Kode_Kelas}>
//         {columns.map((column, i) => (
//           <td
//             key={i}
//             style={{
//               color:
//                 column === coloredColumn.column.key &&
//                 //  ( column === "Type_Kelas" || column === "Status" ) &&
//                 aData[coloredColumn.column.key].toUpperCase() ===
//                   coloredColumn.column.value[0]
//                   ? `var(${coloredColumn.positive})`
//                   : column === coloredColumn.column.key &&
//                     aData[
//                       coloredColumn.column.key
//                     ].toUpperCase() ===
//                       coloredColumn.column.value[1]
//                   ? `var(${coloredColumn.negative})`
//                   : "black",

//               fontWeight:
//                 column === "Type_Kelas" ||
//                 column === "Nama_Kelas" ||
//                 column === "Harga" ||
//                 column === "Level" ||
//                 column === "Status" ||
//                 column === "Kelas_Premium" ||
//                 column === "Metode_Pembayaran"
//                   ? "600"
//                   : "normal",
//             }}
//           >
//             {aData[column]}
//           </td>
//         ))}
//         {isKelolaKelasRoute && (
//           <td className="d-flex justify-content-center">
//             {(selectedRowIndex === null ||
//               selectedRowIndex !== index) && (
//               <>
//                 <button
//                   style={{
//                     backgroundColor: `var(--primary-purple)`,
//                   }}
//                   className="btn rounded-pill text-light"
//                   type="button"
//                   data-bs-toggle="modal"
//                   data-bs-target="#staticBackdrop"
//                 >
//                   Update
//                 </button>
//                 <button
//                   onClick={() => handleDelete(aData.Kode_Kelas)}
//                   style={{
//                     backgroundColor: `var(--allert-red)`,
//                   }}
//                   className="btn text-light rounded-pill mx-2"
//                 >
//                   Delete
//                 </button>
//               </>
//             )}
//           </td>
//         )}
//       </tr>
//     ))}
//   </tbody>
// </table>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default TableAdmin;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { IoTrash } from "react-icons/io5";
import deleteCourse from "../api/deleteCourse";
import Pagination from "react-bootstrap/Pagination";
import ModalAddClass from "./ModalAddClass"; // Pastikan import ModalAddClass

const TableAdmin = ({ data, coloredColumn }) => {
  // ... (kode sebelumnya)
  const location = useLocation();
  const isKelolaKelasRoute = location.pathname === "/admin/class";
  const columns = Object.keys(data[0]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const ITEMS_PER_PAGE = 4; 
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentData = data.slice(startIndex, endIndex);

  const [isModalAddClassOpen, setIsModalAddClassOpen] = useState(false);
  const [courseToUpdate, setCourseToUpdate] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleUbah = (index) => {
    setSelectedRowIndex(index);
    setUpdateData(data[index]);
    setCourseToUpdate(data[index]);
    setIsModalAddClassOpen(true);
  };

  const handleDelete = async (classCode) => {
    try {
      await deleteCourse(classCode);
      console.log("data delete successfuly");
      console.log(classCode);
    } catch (error) {
      console.log("error delete data");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="table-responsive p-4">
      {isSmallScreen ? (
        <div className="accordion" id="accordionExample">
          {data.map((aData, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    index === 0 ? "" : "collapsed"
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${index}`}
                >
                  {`${index + 1}. ${columns[0]} : ${aData[columns[0]]}`}
                </button>
              </h2>
              <div
                id={`collapse-${index}`}
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  {columns.map((column, columnIndex) => (
                    <div key={columnIndex}>
                      <strong>{column}:</strong> {aData[column]}
                    </div>
                  ))}
                  {isKelolaKelasRoute && selectedRowIndex !== index && (
                    <div className="action-buttons">
                      <strong>Action:</strong>{" "}
                      <button
                        onClick={() => handleUbah(index)}
                        className="btn rounded-pill text-light"
                      >
                        <span style={{ color: `var(--primary-purple)` }}>
                          <MdEdit />
                        </span>
                      </button>
                      <button
                        onClick={() => handleDelete(aData.Kode_Kelas)}
                        className="btn text-light rounded-pill"
                      >
                        <span style={{ color: `var(--allert-red)` }}>
                          <IoTrash />
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <style>{`
        .accordion-item {
          margin-bottom: 1rem;
        }
        
        .accordion-header {
          background-color: var(--primary-purple); 
        }
        
        .accordion-button {
          color: var(--primary-purple); 
          font-weight: 500;
        }
        
        .accordion-collapse {
          background-color: #fff; 
          border: 1px solid #ddd; 
          border-radius: 0.25rem;
        }
        
        .mb-3 {
          margin-bottom: 1rem;
        }
        
        .action-buttons {
          margin-top: 0.5rem;
        }
        .accordion-button::after {
          background-color: var(--primary-light-grey);
          padding: 1em;
          border-radius: 50%;
          display: flex; 
          justify-content: center; 
          align-items: center; 
          background-position: center;

      } 
        `}</style>
        </div>
      ) : (
        <>

          <div style={{ padding: "0em 2em" }} className="">
            <table className="table p-5">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      style={{
                        backgroundColor: `var(--primary-young-blue)`,
                      }}
                    >
                      {column}
                    </th>
                  ))}
                  {isKelolaKelasRoute && (
                    <th
                      className="d-flex justify-content-center"
                      style={{
                        backgroundColor: `var(--primary-young-blue)`,
                      }}
                    >
                      Action
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {currentData.map((aData, index) => (
                  <tr key={aData.Kode_Kelas}>
                    {columns.map((column, i) => (
                      <td
                        key={i}
                        style={{
                          color:
                            column === coloredColumn.column.key &&
                            //  ( column === "Type_Kelas" || column === "Status" ) &&
                            aData[coloredColumn.column.key].toUpperCase() ===
                              coloredColumn.column.value[0]
                              ? `var(${coloredColumn.positive})`
                              : column === coloredColumn.column.key &&
                                aData[
                                  coloredColumn.column.key
                                ].toUpperCase() ===
                                  coloredColumn.column.value[1]
                              ? `var(${coloredColumn.negative})`
                              : "black",

                          fontWeight:
                            column === "Type_Kelas" ||
                            column === "Nama_Kelas" ||
                            column === "Harga" ||
                            column === "Level" ||
                            column === "Status" ||
                            column === "Kelas_Premium" ||
                            column === "Metode_Pembayaran"
                              ? "600"
                              : "normal",
                        }}
                      >
                        {aData[column]}
                      </td>
                    ))}
                    {isKelolaKelasRoute && (
                      <td className="d-flex justify-content-center">
                        {(selectedRowIndex === null ||
                          selectedRowIndex !== index) && (
                          <>
                            <button
                              style={{
                                backgroundColor: `var(--primary-purple)`,
                              }}
                              className="btn rounded-pill text-light"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              Update
                            </button>
                            <button
                              onClick={() => handleDelete(aData.Kode_Kelas)}
                              style={{
                                backgroundColor: `var(--allert-red)`,
                              }}
                              className="btn text-light rounded-pill mx-2"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination className="justify-content-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </>
      )}
    </div>
  );
};

export default TableAdmin;
