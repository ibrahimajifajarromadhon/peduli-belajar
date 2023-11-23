import React from "react";
import ModalAddClass from "./ModalAddClass";

function TableAdmin({ data }) {
  const columns = Object.keys(data[0]);

  return (
    <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
      <div>
        <div className="d-flex flex-row gap-4">
          <button className="btn btn-warning">filter</button>
          <ModalAddClass  />
        </div>
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
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
