import React from 'react'

function ChangePassword() {
  return (
    <div className="register w-50 p-3 d-flex flex-column justify-content-center w-100">
      <h3 style={{ color: `var( --neutral-black)`, textAlign: "center", fontWeight: "bold" }}>
        Ubah Password
      </h3>
      <br />
     <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Masukkan Password Lama 
        </label>
        <input
          type="password"
          className="form-control rounded-3"
          id="formGroupExampleInput4"
          placeholder="Password Lama"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Masukkan Password Baru
        </label>
        <input
          type="password"
          className="form-control rounded-3"
          id="formGroupExampleInput4"
          placeholder=" Password Baru"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Ulangi Password Baru 
        </label>
        <input
          type="password"
          className="form-control rounded-3"
          id="formGroupExampleInput4"
          placeholder="Password Baru "
        />
      </div>
      <br />
        <button
          to={"/userProfile"}
          className="btn rounded-4 text-light"
          style={{ backgroundColor: `var(--primary-purple)`, width: "100%" }}
        >
          Ubah Password 
        </button>

        <style>{`
        input {
          height: 48px
        }
        label {
          
        }
        `}</style>
    </div>
  )
}

export default ChangePassword
