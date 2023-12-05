import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { IoTrash } from "react-icons/io5";

const initialUpdateData = {};

const UpdateModal = ({
  isOpen,
  onClose,
  onUpdate,
  updateData,
  setUpdateData,
}) => {
  const handleInputChange = (e, column) => {
    setUpdateData({
      ...updateData,
      [column]: e.target.value,
    });
  };

  const handleUpdate = () => {
    onUpdate();
    onClose();
  };

  const handleCancelUpdate = () => {
    // Cancel update, reset state
    setUpdateData({});
  };

  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      aria-hidden={!isOpen}
      style={{ display: isOpen ? "block" : "none" }}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Data</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                handleCancelUpdate();
                onClose();
              }}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              {Object.keys(updateData).map((column, columnIndex) => (
                <div key={columnIndex} className="mb-3">
                  <label htmlFor={column} className="form-label">
                    {column}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={column}
                    value={updateData[column] || ""}
                    onChange={(e) => handleInputChange(e, column)}
                  />
                </div>
              ))}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const TableAdmin = ({ data }) => {
  const location = useLocation();
  const isKelolaKelasRoute = location.pathname === "/admin/class";

  const columns = Object.keys(data[0]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [updateData, setUpdateData] = useState(initialUpdateData);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true);
  };

  const handleUpdateData = () => {
    // Implement your update logic here
    console.log("Data to be updated:", updateData);
    // Reset state
    setSelectedRowIndex(null);
    setUpdateData(initialUpdateData);
    setIsModalOpen(false);
  };

  const handleCancelUpdate = () => {
    // Cancel update, reset state
    setSelectedRowIndex(null);
    setUpdateData(initialUpdateData);
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    // Implement delete logic here
    console.log("Deleting data at index:", index);
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
                      <td key={i}>{aData[column]}</td>
                    ))}
                    {isKelolaKelasRoute && (
                      <td className="d-flex justify-content-center">
                        {(selectedRowIndex === null ||
                          selectedRowIndex !== index) && (
                          <>
                            <button
                              onClick={() => handleUbah(index)}
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
      {isKelolaKelasRoute && selectedRowIndex !== null && (
        <UpdateModal
          isOpen={isModalOpen}
          onClose={() => {
            handleCancelUpdate(); // Reset state in TableAdmin
            setIsModalOpen(false); // Close the modal
          }}
          onUpdate={handleUpdateData}
          updateData={updateData}
          setUpdateData={setUpdateData}
          backdrop="static"
        />
      )}
    </div>
  );
};

export default TableAdmin;
