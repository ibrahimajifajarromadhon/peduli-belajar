import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { IoTrash } from "react-icons/io5";
import deleteCourse from "../api/deleteCourse";
import UpdateCourse from "./UpdateCourse";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import toast from "react-hot-toast";

const TableAdmin = ({ data, coloredColumn }) => {
  const location = useLocation();
  const isKelolaKelasRoute = location.pathname === "/admin/class";
  const columns = data && data.length > 0 ? Object.keys(data[0]) : [];
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
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleGetDetailCourse = async (uniqCode) => {
    try {
      setShowModal(true);
      setPassCode(uniqCode);
    } catch (error) {
      toast.error("Gagal Mendapatkan Data Course!", {
        style: {
          fontFamily: 'Montserrat'
        },
      });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="table-responsive px-1 py-2 mx-2 my-1" style={{paddingTop:"2em"}}>
      {isSmallScreen ? (
        <div
          className="accordion"
          id="accordionExample"
          style={{ marginTop: "10px" }}
        >
          {data.map((aData, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" style={{}}>
                <button
                  className={`accordion-button ${
                    index === openAccordionIndex ? "" : "collapsed"
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${index}`}
                  aria-expanded={
                    index === openAccordionIndex ? "true" : "false"
                  }
                  aria-controls={`collapse-${index}`}
                  data-bs-parent="#accordionExample"
                  onClick={() => handleAccordionToggle(index)}
                >
                  {`${index + 1}. ${columns[0].replace(/_/g, " ")} : ${
                    aData[columns[0]]
                  }`}
                </button>
              </h2>
              <div
                id={`collapse-${index}`}
                className={`accordion-collapse collapse ${
                  index === openAccordionIndex ? "show" : ""
                }`}
              >
                <div className="accordion-body">
                  {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="d-flex flex-row">
                      <div>
                        <div style={{ width: "9em" }}>
                          <strong
                            className="d-flex align-items-center"
                            style={{
                              width: "20em",
                              fontSize: "14px",
                            }}
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
                              : "#202244",

                          fontWeight:
                            column === "Tipe_Kelas" ||
                            column === "Nama_Kelas" ||
                            column === "Harga_Kelas" ||
                            column === "Level" ||
                            column === "Status" ||
                            column === "Kelas_Premium" ||
                            column === "Metode_Pembayaran"
                              ? "700"
                              : "700",
                        }}
                      >
                        {column === "Harga_Kelas"
                          ? `Rp ${aData[column]}`
                          : aData[column]}{" "}
                      </div>
                    </div>
                  ))}
                  {isKelolaKelasRoute && selectedRowIndex !== index && (
                    <div className="action-buttons" style={{ height: "50px" }}>
                      <div
                        className="d-flex flex-row justify-content-start align-items-center"
                        style={{ gap: "5.9em" }}
                      >
                        <div>
                          <strong>Action</strong>
                        </div>
                        <div>
                          :
                          <button
                            onClick={() =>
                              handleGetDetailCourse(aData.Kode_Kelas)
                            }
                            className="btn rounded-pill text-light"
                            data-bs-toggle="modal"
                            data-bs-target="#updateModal"
                          >
                            <span
                              style={{
                                color: `var(--primary-purple)`,
                              }}
                            >
                              <MdEdit />
                            </span>
                          </button>
                          <button
                            onClick={() => handleDelete(aData.Kode_Kelas)}
                            className="btn text-light rounded-pill"
                          >
                            <span
                              style={{
                                color: `var(--allert-red)`,
                              }}
                            >
                              <IoTrash />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <style>{`

        div {
        }
        .accordion-item {
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--primary-purple);
          border-left: none;
          border-right: none;
          border-top: none;
        }
        
        .accordion-header {
          border: 1px solid #ffffff;
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
          <div>
            <table className="table">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th
                      className="tabel-head"
                      key={column}
                      scope="col"
                      style={{
                        backgroundColor: `var(--primary-young-blue)`,
                        textAlign: "left",
                        height: "3em",
                        verticalAlign: "middle",
                        borderBottom: "none",
                      }}
                    >
                      {column.replace(/_/g, " ")}
                    </th>
                  ))}
                  {isKelolaKelasRoute && (
                    <th
                      className="justify-content-center"
                      scope="col"
                      style={{
                        backgroundColor: `var(--primary-young-blue)`,
                        height: "3em",
                        textAlign: "left",
                        verticalAlign: "middle",
                        borderBottom: "none",
                      }}
                    >
                      Aksi
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {currentData.map((aData, index) => (
                  <tr key={aData.Kode_Kelas} className="">
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
                              : "#202244",

                          fontWeight:
                            column === "Tipe_Kelas" ||
                            column === "Nama_Kelas" ||
                            column === "Harga_Kelas" ||
                            column === "Level" ||
                            column === "Status" ||
                            column === "Kelas_Premium" ||
                            column === "Metode_Pembayaran"
                              ? "700"
                              : "700",

                          fontSize: "12px",
                          fontFamily: "Montserrat",
                          textAlign: "left",
                          width: "250px",
                          borderBottom: "none",
                        }}
                      >
                        {column === "Harga_Kelas"
                          ? `Rp ${aData[column]}`
                          : aData[column].replace(/_/g, " ")}
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
                                  padding:"8px 20px 8px 20px"
                                }}
                                className="btn rounded-pill text-light"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#updateModal"
                                onClick={() =>
                                  handleGetDetailCourse(aData.Kode_Kelas)
                                }
                              >
                                Ubah
                              </button>
                              <button
                                onClick={() => handleDelete(aData.Kode_Kelas)}
                                style={{
                                  backgroundColor: `var(--allert-red)`,
                                  padding:"8px 18px 8px 18px"
                                }}
                                className="btn text-light rounded-pill mx-2"
                              >
                                Hapus
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
            <div className="pagination-buttons justify-content-center text-light">
              <button
                className="btn mx-1 rounded-pill"
                style={{backgroundColor:`var(--primary-purple)`}}
                onClick={() =>
                  handlePageChange(currentPage - 1 > 0 ? currentPage - 1 : 1)
                }
                disabled={currentPage === 1}
              >
                <FaArrowLeft />
              </button>
              <button
                className="btn mx-1 rounded-pill text-light"
                style={{backgroundColor:`var(--primary-purple)`}}
                onClick={() =>
                  handlePageChange(
                    currentPage + 1 <= totalPages ? currentPage + 1 : totalPages
                  )
                }
                disabled={currentPage === totalPages}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </>
      )}
      <div className="">
        <div
          className="modal fade"
          role="dialog"
          id="updateModal"
          tabIndex="-1"
          aria-labelledby="updateModalLabeled"
          aria-hidden="true"
        >
          <div className="modal-dialog" style={{ fontFamily: "Montserrat" }}>
            <div className="modal-content px-2">
              <div className="modal-header" style={{ borderBottom: "none" }}>
                <h1
                  className="modal-title py-2"
                  style={{
                    color: "var(--primary-purple)",
                    fontWeight: "700",
                    fontSize: "25px",
                  }}
                  id="updateModalLabeled"
                >
                  Ubah Kelas
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" style={{ marginTop: "-20px" }}>
                {showModal && <UpdateCourse courseCode={passCode} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
      .tabel-head {
        font-family: Montserrat;
        font-size: 15px;
        font-weight: 700;
      }
      `}</style>
    </div>
  );
};

export default TableAdmin;
