import React from 'react'
import img from '../../assets/img-onboarding.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ModalStartClass = ({ courseCode }) => {
  const navigate = useNavigate();

  const handleStartClass = () => {
    navigate(`/detailClass/${courseCode}`);
  };

  return (
    <>

    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title text-center" id="exampleModalLabel">
              Onboarding...
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img src={img} alt="" style={{marginLeft:'150px'}}/>
            <div className='text-center'>
                <b>Persiapkan hal berikut untuk belajar yang maksimal:</b>
                <p className='mt-3'>Mempunyai akun Figma atau Install Adobe XD <br/> 
                Menggunakan internet minimal kecepatan 2Mbps <br/>
                Belajar di tempat yang nyaman</p>

            </div>
          </div>
          {/* <Link to={`/detailClass/:id`} style={{textDecoration:"none", color:"#fff"}}> */}
          <div className="text-center">
            <button onClick={handleStartClass} type="button" className="btn btn-primary text-center" style={{width:'50%', marginBottom:'20px', borderRadius:'20px', backgroundColor: "#6148FF"}} data-bs-dismiss="modal">
              Ikuti Kelas
            </button>
            </div>
            {/* </Link> */}
        </div>
      </div>

      {/* <style>
          {`
        .modal-bottom {
          display: none;
        }

        @media (max-width: 576px) {
          .modal {
            display: none;
          }

          .modal-bottom {
            display: block;
          }
        }`}
        </style> */}
    </div>
    </>
  )
}

export default ModalStartClass