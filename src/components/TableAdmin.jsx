import React from "react";
import ModalAddClass from "./ModalAddClass";

function TableAdmin({ data }) {
  const columns = Object.keys(data[0]);

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div>
        <div className="d-flex flex-row gap-4 w-100 my-4" style={{justifyContent:"flex-end"}}>
          <ModalAddClass />
          <button className="btn btn-warning">filter</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  style={{ backgroundColor: `var(--primary-young-blue)` }}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map((aData) => (
              <tr>
                {Object.values(aData).map((value) => (
                  <td>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableAdmin;
