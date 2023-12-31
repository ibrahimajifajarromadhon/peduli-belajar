import React from "react";
import { useNavigate } from "react-router-dom";
import Success from "../../assets/success-img.png";
import ModalStartClass from "../../components/user/ModalStartClass";
import { useLocation } from "react-router-dom";

function SuccessBayarCourse() {
  const navigate = useNavigate();
  const location = useLocation();
  const courseCode = location.state?.courseCode || "";

  const handleBack = () => {
    navigate(`/allCourseClass`);
  };

  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="wrapper">
          <div className="header d-flex justify-content-center">
            <button className="button mb-3">
              Terimakasih atas pembayaran transaksi
            </button>
          </div>
        </div>
      </div>
      <hr className="wrapper" />
      <div className="container">
        <h1
          className="d-flex justify-content-center mb-5"
          style={{ fontWeight: "700", color: "#6148FF" }}
        >
          Selamat!
        </h1>
        <div
          className="mb-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Success} alt="" />
        </div>

        <p
          className="d-flex justify-content-center align-items-center mb-1"
          style={{ fontWeight: "700" }}
        >
          Transaksi pembayaran kelas premium berhasil!
        </p>
        <p
          className="d-flex justify-content-center align-items-center"
          style={{ fontWeight: "600" }}
        >
          E-receipt telah dikirimkan ke email.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <button
            className="btn button-mulai"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Mulai Belajar
          </button>
          <ModalStartClass courseCode={courseCode} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
            marginTop: "5px",
          }}
        >
          <button
            onClick={handleBack}
            className="btn"
            style={{ color: "#489CFF", fontWeight: "600" }}
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>

      <style>{`
            @media (max-width: 768px) {
                .wrapper {
                display: none;
                }
            }

            .button {
                background-color: #73CA5C;
                color: #fff;
                border: none;
                padding: 10px;
                border-radius: 10px;
                font-weight: 600;
                width: 60%
            }

            .button-mulai {
                background-color: #6148FF;
                color: #fff;
                border: none;
                padding: 10px;
                border-radius: 25px;
                font-weight: 600;
                width: 300px;
            }

            .button-mulai:hover {
                background-color: #6148FF;
                color: #fff;
            }

            hr{
                height:2px;
                border-width:0;
                color:gray;
                background-color:gray;
                box-shadow:0px 0px 4px 0px grey;
            }

        `}</style>
    </>
  );
}

export default SuccessBayarCourse;
