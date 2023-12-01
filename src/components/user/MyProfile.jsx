import React from 'react'
import foto from '../../assets/foto.svg' // Pastikan pathnya benar

function MyProfile() {
  return (
    <div className="register w-50 p-3 d-flex flex-column justify-content-center w-100">
      <div className="d-flex justify-content-center align-items-center mb-3">
        <img src={foto} alt="foto" />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Nama
        </label>
        <input
          type="email"
          className="form-control rounded-3"
          id="formGroupExampleInput2"
          placeholder=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Email
        </label>
        <input
          type="password"
          className="form-control rounded-3"
          id="formGroupExampleInput4"
          placeholder=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Nomor Telepon
        </label>
        <input
          type="password"
          className="form-control rounded-3"
          id="formGroupExampleInput4"
          placeholder="Masukkan Password"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Negara
        </label>
        <input
          type="password"
          className="form-control rounded-3"
          id="formGroupExampleInput4"
          placeholder="Masukkan Negara tempat tinggal"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Kota
        </label>
        <input
          type="password"
          className="form-control rounded-3"
          id="formGroupExampleInput4"
          placeholder="Masukkan Kota tempat tinggal"
        />
      </div>
      <div className="mb-3">
        <br />
        <button
          to={"/userProfile"}
          className="btn rounded-4 text-light"
          style={{ backgroundColor: `var(--primary-purple)`, width: "100%" }}
        >
          Simpan Profil Saya
        </button>
      </div>
    </div>
  )
}

export default MyProfile;
