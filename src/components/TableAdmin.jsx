import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { IoTrash } from "react-icons/io5";
import deleteCourse from "../api/deleteCourse";
import Pagination from "react-bootstrap/Pagination";
import UpdateCourse from "./UpdateCourse";

const TableAdmin = ({ data, coloredColumn }) => {
  const location = useLocation();
  const isKelolaKelasRoute = location.pathname === "/admin/class";
  const columns = Object.keys(data[0]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [passCode, setPassCode] = useState();
  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, data.length);
  const currentData = data.slice(startIndex, endIndex);

  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDelete = async (classCode) => {
    try {
      await deleteCourse(classCode);
      console.log("data delete successfuly");
    } catch (error) {
      console.log("error delete data", error);
    }
  };

  const handleGetDetailCourse = async (uniqCode) => {
    try {
      setShowModal(true);
      setPassCode(uniqCode);
    } catch (error) {
      console.log("gagal");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      className="table-responsive p-3 mx-3 my-2"
      style={{ borderTop: `2px solid var(--primary-purple)` }}
    >
      {isSmallScreen ? (
        <div className="accordion my-3" id="accordionExample">
          {data.map((aData, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    index === openAccordionIndex ? "" : "collapsed"
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${index}`}
                  aria-expanded={index === openAccordionIndex ? 'true' : 'false'}
                  aria-controls={`collapse-${index}`}
                  data-bs-parent="#accordionExample"
                  onClick={() => handleAccordionToggle(index)}
                >
                  {`${index + 1}. ${columns[0].replace(/_/g, " ")} : ${aData[columns[0]]}`}
                </button>
              </h2>
              <div
                id={`collapse-${index}`}
                className={`accordion-collapse collapse ${index === openAccordionIndex ? 'show' : ''}`}
              >
                <div className="accordion-body">
                  {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="d-flex flex-row">
                      <div>
                        <div style={{ width: "9em" }}>
                          <strong
                            className="d-flex align-items-center"
                            style={{ width: "12em", fontSize: "14px" }}
                          >
                            {column.replace(/_/g, " ")}
                          </strong>
                        </div>
                      </div>
                      :
                      <div
                        className="d-flex align-items-center"
                        style={{
                          marginLeft: "0.5em",
                          fontSize: "14px",
                          color:
                            column === coloredColumn.column.key &&
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
                      </div>
                    </div>
                  ))}
                  {isKelolaKelasRoute && selectedRowIndex !== index && (
                    <div className="action-buttons">
                      <div>
                        <strong>Action:</strong>
                      </div>
                      <button
                        onClick={() => handleGetDetailCourse(aData.Kode_Kelas)}
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
          height: 300px;
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
                <tr >
                  {columns.map((column) => (
                    <th className="justify-content-center align-items-center"
                      key={column}
                      scope="col"
                      style={{
                        backgroundColor: `var(--primary-young-blue)`,
                      }}
                    >
                      {column.replace(/_/g," ")}
                    </th>
                  ))}
                  {isKelolaKelasRoute && (
                    <th
                      className="d-flex justify-content-center align-items-center"
                      scope="col"
                      style={{
                        backgroundColor: `var(--primary-young-blue)`,
                        height:"4.35em"

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
                          
                          fontSize: "0.9em"
                        }}
                      >
                        {aData[column]}
                      </td>
                    ))}
                    {isKelolaKelasRoute && (
                      <td className="d-flex justify-content-center border-0">
                        {(selectedRowIndex === null ||
                          selectedRowIndex !== index) && (
                          <>
                            <div className="d-flex flex-row justify-content-center align-items-center">
                              <button
                                style={{
                                  backgroundColor: `var(--primary-purple)`,
                                  marginBottom: "",
                                }}
                                className="btn rounded-pill text-light"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                onClick={() =>
                                  handleGetDetailCourse(aData.Kode_Kelas)
                                }
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
                            </div>
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
      <div className="">
        {showModal && (
          <UpdateCourse showModal={showModal} courseCode={passCode} />
        )}
      </div>
    </div>
  );
};

export default TableAdmin;
