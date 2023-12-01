// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { MdEdit } from "react-icons/md";
// import { IoTrash } from "react-icons/io5";

// function TableAdmin({ data }) {
//   const location = useLocation();
//   const isKelolaKelasRoute = location.pathname === "/admin/class";

//   const columns = Object.keys(data[0]);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

//   const [selectedRowIndex, setSelectedRowIndex] = useState(null);
//   const [updateData, setUpdateData] = useState({});

//   const handleUbah = (index) => {
//     setSelectedRowIndex(index);
//     setUpdateData(data[index]);
//   };

//   const handleUpdateData = () => {
//     // Implementasikan logika update sesuai kebutuhan Anda
//     console.log("Data yang akan diupdate:", updateData);
//     // Setelah update, reset state
//     setSelectedRowIndex(null);
//     setUpdateData({});
//   };

//   const handleCancelUpdate = () => {
//     // Batalkan proses update, reset state
//     setSelectedRowIndex(null);
//     setUpdateData({});
//   };

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
//                   // style={{backgroundColor:`var(--primary-purple)`}}
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
//                   {isKelolaKelasRoute && selectedRowIndex === index && (
//                     <div>
//                       {/* Formulir untuk update */}
//                       <form>
//                         {columns.map((column, columnIndex) => (
//                           <div key={columnIndex} className="mb-3">
//                             <label htmlFor={column} className="form-label">
//                               {column}
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               id={column}
//                               value={updateData[column] || ""}
//                               onChange={(e) =>
//                                 setUpdateData({
//                                   ...updateData,
//                                   [column]: e.target.value,
//                                 })
//                               }
//                             />
//                           </div>
//                         ))}
//                         <button
//                           type="button"
//                           className="btn btn-primary"
//                           onClick={handleUpdateData}
//                         >
//                           Update
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-secondary mx-2"
//                           onClick={handleCancelUpdate}
//                         >
//                           Cancel
//                         </button>
//                       </form>
//                     </div>
//                   )}
//                   {isKelolaKelasRoute && selectedRowIndex !== index && (
//                     <div>
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
//                         onClick={() => handleDelete(index)}
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
//         </div>
//       ) : (
//         <>
//           <div style={{ padding: "0em 2em" }}>
//             <table className="table p-5">
//               <thead>
//                 <tr>
//                   {columns.map((column) => (
//                     <th
//                       key={column}
//                       scope="col"
//                       style={{
//                         backgroundColor: `var(--primary-young-blue)`,
//                       }}
//                     >
//                       {column}
//                     </th>
//                   ))}
//                   {isKelolaKelasRoute && (
//                     <th className="d-flex justify-content-center" style={{ backgroundColor: `var(--primary-young-blue)` }}>
//                       Action
//                     </th>
//                   )}
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((aData, index) => (
//                   <tr key={index}>
//                     {columns.map((column, i) => (
//                       <td key={i}>{aData[column]}</td>
//                     ))}
//                     {isKelolaKelasRoute && selectedRowIndex === index && (
//                       <td className="d-flex justify-content-center">
//                         <button
//                           onClick={handleUpdateData}
//                           className="btn rounded-pill text-light"
//                         >
//                           Update
//                         </button>
//                         <button
//                           onClick={handleCancelUpdate}
//                           className="btn rounded-pill text-light mx-2"
//                         >
//                           Cancel
//                         </button>
//                       </td>
//                     )}
//                     {isKelolaKelasRoute && selectedRowIndex !== index && (
//                       <td className="d-flex justify-content-center">
//                         <button
//                           onClick={() => handleUbah(index)}
//                           style={{ backgroundColor: `var(--primary-purple)` }}
//                           className="btn rounded-pill text-light"
//                         >
//                           Update
//                         </button>
//                         <button
//                           onClick={() => handleDelete(index)}
//                           style={{ backgroundColor: `var(--allert-red)` }}
//                           className="btn text-light rounded-pill mx-2"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default TableAdmin;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { IoTrash } from "react-icons/io5";

// Move state and functions to the top level
const initialUpdateData = {};

const TableAdmin = ({ data }) => {
  const location = useLocation();
  const isKelolaKelasRoute = location.pathname === "/admin/class";

  const columns = Object.keys(data[0]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [updateData, setUpdateData] = useState(initialUpdateData);

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
  };

  const handleUpdateData = () => {
    // Implement your update logic here
    console.log("Data to be updated:", updateData);
    // Reset state
    setSelectedRowIndex(null);
    setUpdateData(initialUpdateData);
  };

  const handleCancelUpdate = () => {
    // Cancel update, reset state
    setSelectedRowIndex(null);
    setUpdateData(initialUpdateData);
  };

  return (
    <div className="table-responsive p-4">
      {isSmallScreen ? (
        // ... (remaining code for small screens)
        <div className="accordion" id="accordionExample">
          {data.map((aData, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    index === 0 ? "" : "collapsed"
                  }`}
                  // style={{backgroundColor:`var(--primary-purple)`}}
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
                  {isKelolaKelasRoute && selectedRowIndex === index && (
                    <div>
                      {/* Formulir untuk update */}
                      <form>
                        {columns.map((column, columnIndex) => (
                          <div key={columnIndex} className="mb-3">
                            <label htmlFor={column} className="form-label">
                              {column}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id={column}
                              value={updateData[column] || ""}
                              onChange={(e) =>
                                setUpdateData({
                                  ...updateData,
                                  [column]: e.target.value,
                                })
                              }
                            />
                          </div>
                        ))}
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleUpdateData}
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary mx-2"
                          onClick={handleCancelUpdate}
                        >
                          Cancel
                        </button>
                      </form>
                    </div>
                  )}
                  {isKelolaKelasRoute && selectedRowIndex !== index && (
                    <div>
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
                        onClick={() => handleDelete(index)}
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
        </div>
      ) : (
        <>
          <div style={{ padding: "0em 2em" }}>
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
                {data.map((aData, index) => (
                  <tr key={index}>
                    {columns.map((column, i) => (
                      <td key={i}>
                        {selectedRowIndex === index ? (
                          <input
                            type="text"
                            value={updateData[column] || ""}
                            onChange={(e) =>
                              setUpdateData({
                                ...updateData,
                                [column]: e.target.value,
                              })
                            }
                          />
                        ) : (
                          aData[column]
                        )}
                      </td>
                    ))}
                    {isKelolaKelasRoute && (
                      <td className="d-flex justify-content-center">
                        {selectedRowIndex === index ? (
                          <>
                            <button
                              onClick={handleUpdateData}
                              className="btn rounded-pill text-light"
                              style={{backgroundColor: `var(--primary-purple)`}}
                            >
                              Save
                            </button>
                            <button
                              onClick={handleCancelUpdate}
                              className="btn btn-secondary rounded-pill text-light mx-2"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => handleUbah(index)}
                              style={{
                                backgroundColor: `var(--primary-purple)`,
                              }}
                              className="btn rounded-pill text-light"
                            >
                              Update
                            </button>
                            <button
                              onClick={() => handleDelete(index)}
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
          </div>
        </>
      )}
    </div>
  );
};

export default TableAdmin;
