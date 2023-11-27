// import React from "react";

// function TableAdmin({ data }) {
//   const columns = Object.keys(data[0]);

//   return (
//     <>
//       <div className="table-responsive p-4 d-lg-flex d-none">
//         <table className="table">
//           <thead>
//             <tr>
//               {columns.map((column) => (
//                 <th
//                   key={column}
//                   scope="col"
//                   style={{ backgroundColor: `var(--primary-young-blue)` }}
//                 >
//                   {column}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="">
//             {data.map((aData) => (
//               <tr>
//                 {Object.values(aData).map((value) => (
//                   <td>{value}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default TableAdmin;
import React, { useEffect, useState } from "react";

function TableAdmin({ data }) {
  const columns = Object.keys(data[0]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                  {/* Render data inside accordion */}
                  {columns.map((column, columnIndex) => (
                    <div key={columnIndex}>
                      <strong>{column}:</strong> {aData[column]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div style={{padding:"0em 2em"}}>
            <table className="table p-5">
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
              <tbody>
                {data.map((aData, index) => (
                  <tr key={index}>
                    {Object.values(aData).map((value, i) => (
                      <td key={i}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default TableAdmin;
