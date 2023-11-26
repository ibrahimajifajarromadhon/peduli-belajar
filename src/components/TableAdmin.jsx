import React from "react";
import ModalAddClass from "./ModalAddClass";
import { CiFilter } from "react-icons/ci";

function TableAdmin({ data }) {
  const columns = Object.keys(data[0]);

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div>
        <div className="d-flex flex-row gap-4 w-100 my-4" style={{justifyContent:"flex-end"}}>
          <ModalAddClass />
          <button className="btn rounded-pill" style={{borderColor:`var(--primary-purple)`, color:`var(--primary-purple)`}}>
            <span><CiFilter style={{marginRight:"0.5em", color:`var(--primary-purple)`}}/></span>
            filter</button>
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
          <tbody className="">
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
