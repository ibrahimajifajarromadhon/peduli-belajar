import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleResetPassword = () => {
    // Validasi karakter minimum 8
    if (newPassword.length < 8) {
      setError('Password harus terdiri dari minimal 8 karakter');
      return;
    }

    // Validasi kecocokan password
    if (newPassword !== confirmPassword) {
      setError('Password tidak cocok');
      return;
    }

    // Lakukan tindakan reset password di sini (contoh: panggil API, kirim formulir, dll.)

    // Clear error jika reset password berhasil
    setError('');
  };

  return (
    <div className="register w-50 p-3 d-flex flex-column justify-content-center">
      <h4 style={{ color: `var(--primary-purple)`, textAlign: "center" }}>Reset Password</h4>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Masukkan Password Baru
        </label>
        <input
          type="password"
          className="form-control rounded-4"
          id="formGroupExampleInput2"
          placeholder="************"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Ulangi Password Baru
        </label>
        <input
          type="password"
          className="form-control rounded-4"
          id="formGroupExampleInput4"
          placeholder="************"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <div className="mb-3">
        <button
          onClick={handleResetPassword}
          className="btn rounded-4 text-light"
          style={{ backgroundColor: `var(--primary-purple)`, width: "100%" }}
        >
          Masuk
        </button>
      </div>
      <hr />
      <div className="text-center">
        <p>
          Belum punya akun?{" "}
          <span>
            <Link to={`/register`} style={{ textDecoration: "none", color: `var(--primary-purple)`, fontWeight: "bold" }}>
              Daftar di sini
            </Link>
          </span>
        </p>
      </div>

      {/* Media Query for Large Screens */}
      <style>
        {`
          @media (max-width: 628px) {
            .register {
              width: 100% !important;
              height: 100% !important;
              background-color: var(--primary-young-blue) !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ResetPassword;
