import React from "react";

function TableAdmin({ data }) {
  const columns = Object.keys(data[0]);

  return (
    <>
   {/* <div className="d-flex justify-content-center align-items-center h-100 table-responsive-sm" style={{width:"628px"}}> */}
      {/* <div> */}
       
        <div className="table-responsive p-4">
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
      {/* </div> */}
    {/* </div> */}
    </>
  );
}

export default TableAdmin;
