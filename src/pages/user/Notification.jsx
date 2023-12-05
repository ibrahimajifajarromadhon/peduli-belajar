import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";
import { Link } from "react-router-dom";


function Notification() {
  return (
    <>
    <div
        style={{
          backgroundColor: `var(--primary-young-blue)`,
          height: "150px",
          position: "absolute",
          width:"100%"
        }}
      ></div>
    <div className="d-flex flex-column justify-content-between align-items-center position-relative z-1" style={{marginTop:"4em"}}>
    <Link to={"/myclass"} style={{marginTop: "2.5em", textDecoration:"none", color:`var(--primary-purple)`, fontSize:"16px", width:"78%", marginBottom:"1em", fontWeight:"700"}}><span style={{fontSize:"1.3em", marginRight:"1.5em"}}><FaArrowLeft/></span>Kembali ke Beranda</Link>
      <div
        style={{
          width: "70%",
          border: "1px solid var(--primary-purple)",
        }}
        className="card d-flex flex-column  align-items-center justify-content-center"
      >
        <div
          style={{ backgroundColor: `var(--primary-purple)`, height:"62px" }}
          className="w-100 rounded-top-2 d-flex justify-content-center align-items-center m-0"
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
    </>
  );
}

export default Notification;
