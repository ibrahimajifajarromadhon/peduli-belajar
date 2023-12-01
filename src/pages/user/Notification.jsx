import React from "react";
import { IoNotificationsCircle } from "react-icons/io5";

function Notification() {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center ">
      <div
        style={{
          marginTop: "5em",
          width: "70%",
          border: "1px solid var(--primary-purple)",
        }}
        className="card d-flex flex-column  align-items-center"
      >
        <div
          style={{ backgroundColor: `var(--primary-purple)` }}
          className="w-100 rounded-top-2 d-flex justify-content-center h-100 align-items-center m-0"
        >
          <p className="m-2 text-light" style={{fontWeight:"bold"}}>AKUN</p>
        </div>
        <div className="d-flex flex-column justify-content-start w-100 px-4 py-2">
          <h5
            style={{ color: `var(--primary-purple)` }}
            className="d-flex align-items-center justify-content-start"
          >
            <span style={{marginRight:"1em"}}>
              <IoNotificationsCircle />
            </span>
              Promosi
          </h5>
          <p style={{marginLeft:"2.5em", fontWeight:"bold"}} className="my-0">Dapatkan Potongan 50% selama Bulan Maret</p>
          <p style={{marginLeft:"2.5em", color:`var(--neutral-grey)`}}>Syarat dan ketentuan berlaku!</p>
        </div>

        <div className="d-flex flex-column justify-content-start w-100 px-4 py-2">
          <h5
            style={{ color: `var(--primary-purple)` }}
            className="d-flex align-items-center justify-content-start"
          >
            <span style={{marginRight:"1em"}}>
              <IoNotificationsCircle />
            </span>
              Promosi
          </h5>
          <p style={{marginLeft:"2.5em", fontWeight:"bold"}} className="my-0">Dapatkan Potongan 50% selama Bulan Maret</p>
          <p style={{marginLeft:"2.5em", color:`var(--neutral-grey)`}}>Syarat dan ketentuan berlaku!</p>
        </div>
      </div>
    </div>
  );
}

export default Notification;
