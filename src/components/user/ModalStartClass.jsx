import React from 'react'
import img from '../../assets/img-onboarding.png'
import { Link } from "react-router-dom";

const ModalStartClass = () => {
  return (
    <>
    {/* <div className='modal-bottom'>
    <div class="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    <img src={img} alt="" style={{marginLeft:'150px'}}/>
    <div className='text-center'>
        <b>Persiapkan hal berikut untuk belajar yang maksimal:</b>
        <p className='mt-3'>Mempunyai akun Figma atau Install Adobe XD <br/> 
        Menggunakan internet minimal kecepatan 2Mbps <br/>
        Belajar di tempat yang nyaman</p>
    </div>    
  </div>
</div>
    </div> */}
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
          <Link to={`/detailClass/:id`} style={{textDecoration:"none", color:"#fff"}}>
          <div className="text-center">
            <button type="button" className="btn btn-primary text-center" style={{width:'50%', marginBottom:'20px', borderRadius:'20px', backgroundColor: "#6148FF"}} data-bs-dismiss="modal">
              Ikuti Kelas
            </button>
            </div>
            </Link>
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