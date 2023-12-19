import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

function ChangePassword() {
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const toggleOldPassword = () => {
    setOldPassword(!oldPassword);
  };

  const toggleNewPassword = () => {
    setNewPassword(!newPassword);
  };

  const toggleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };

  const handleUpdatePassword = async () => {
    const dataUpdate = {
      oldPassword: passwordOld,
      newPassword: passwordNew,
      confirmPassword: passwordConfirm
    };

    const token = Cookies.get("token");
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

    try {
      const response = await fetch(`${import.meta.env.VITE_API}/api/user/updatePassword`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(dataUpdate)
      });
      if (response.ok) {
        toast.success("Password berhasil diupdate!");
      } else {
        toast.error("Password gagal diupdate!");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      className="register w-50 p-3 d-flex flex-column justify-content-center w-100"
      style={{
        fontFamily: "Poppins",
        fontSize: "12px",
        fontWeight: "400",
        textAlign: "left",
      }}
    >
      <h3
        style={{
          color: `var( --neutral-black)`,
          textAlign: "center",
          fontFamily: "Montserrat",
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "36px",
        }}
      >
        Ubah Password
      </h3>
      <br />
      <div className="mb-3 position-relative">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Masukkan Password Lama
        </label>
        <input
            type={oldPassword ? "text" : "password"}
            className="form-control rounded-3"
            id="formGroupExampleInput1"
            placeholder="**********"
            value={passwordOld}
            onChange={(e) => setPasswordOld(e.target.value)}
          />
          <span
          className="position-absolute top-50 end-0 translate-middle-y"
          onClick={toggleOldPassword}
        >
          {oldPassword ? (
            <FaEyeSlash
              style={{ marginRight: "15px", marginTop: "30px", color: "grey" }}
            />
          ) : (
            <FaEye
              style={{ marginRight: "15px", marginTop: "30px", color: "grey" }}
            />
          )}
        </span>
      </div>
      <div className="mb-3 position-relative">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Masukkan Password Baru
        </label>
        <input
            type={newPassword ? "text" : "password"}
            className="form-control rounded-3"
            id="formGroupExampleInput2"
            placeholder="**********"
            value={passwordNew}
            onChange={(e) => setPasswordNew(e.target.value)}
          />
          <span
          className="position-absolute top-50 end-0 translate-middle-y"
          onClick={toggleNewPassword}
        >
          {newPassword ? (
            <FaEyeSlash
              style={{ marginRight: "15px", marginTop: "30px", color: "grey" }}
            />
          ) : (
            <FaEye
              style={{ marginRight: "15px", marginTop: "30px", color: "grey" }}
            />
          )}
        </span>
      </div>
      <div className="mb-3 position-relative">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Ulangi Password Baru
        </label>
        <input
            type={confirmPassword ? "text" : "password"}
            className="form-control rounded-3"
            id="formGroupExampleInput3"
            placeholder="**********"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <span
          className="position-absolute top-50 end-0 translate-middle-y"
          onClick={toggleConfirmPassword}
        >
          {confirmPassword ? (
            <FaEyeSlash
              style={{ marginRight: "15px", marginTop: "30px", color: "grey" }}
            />
          ) : (
            <FaEye
              style={{ marginRight: "15px", marginTop: "30px", color: "grey" }}
            />
          )}
        </span>
      </div>
      <br />
      <button
        className="btn rounded-4 text-light"
        style={{
          backgroundColor: `var(--primary-purple)`,
          width: "100%",
          fontWeight: "700",
        }}
        onClick={handleUpdatePassword}
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
  );
}

export default ChangePassword;
