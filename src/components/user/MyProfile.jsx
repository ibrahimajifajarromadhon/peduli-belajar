import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from "react-hot-toast";
import foto from "../../assets/foto.png";

function MyProfile() {
  const [fullName, setFullName] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [email, setEmail] = useState("");
  const [newProfilePicture, setNewProfilePicture] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  
    axios.get(`${import.meta.env.VITE_API}/api/user`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((response) => {
      setFullName(response.data.data.fullName);
      setNoTelp(response.data.data.noTelp);
      setCity(response.data.data.city);
      setCountry(response.data.data.country);
      setProfilePicture(response.data.data.profilePictureUrl);
      setEmail(response.data.data.email);
    })
    .catch((error) => {
      throw error;
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('noTelp', noTelp);
      formData.append('city', city);
      formData.append('country', country);
      if (newProfilePicture) {
        formData.append('profilePicture', newProfilePicture);
      }

      const response = await fetch(`${import.meta.env.VITE_API}/api/user/edit-profile`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: formData,
      });
  
      const responseData = await response.json();
      toast.success('Data profil berhasil disimpan!', {
        style: {
          fontFamily: 'Montserrat'
        },
      });
    } catch (error) {
      toast.error('Data profil gagal disimpan!', {
        style: {
          fontFamily: 'Montserrat'
        },
      });    
    } finally {
      setIsLoading(false);
      setNewProfilePicture(null);
    }
  };

  const onProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
      setNewProfilePicture(file);
    }
  };
  
  return (
    <form onSubmit={onSubmit} className="register w-50 d-flex flex-column justify-content-center w-100" style={{padding:"0px 25px 0px 25px"}}>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div style={{ position: 'relative' }}>
          <input
            type="file"
            accept="image/*"
            onChange={onProfilePictureChange}
            style={{ display: 'none' }}
            id="fileInput"
          />
          <label htmlFor="fileInput" style={{ position: 'absolute', bottom: '0px', right: '10px', cursor: 'pointer' }}>
            <img
              src={foto}
              alt="Upload"
              style={{ width: '2.2em', height: '2.2em', border: '3px solid var(--primary-purple)', borderRadius: '50%', }}
            />
          </label>
          {profilePicture && (
            <div
              style={{
                width: '8em',
                height: '8em',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid var(--primary-purple)',
              }}
            >
              <img
                src={profilePicture}
                alt="Profile"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          )}
        </div>
      </div>

      <div className="mb-3">
        <label id="formGroupExampleInput2" className="form-label">
          Nama
        </label>
        <input 
          type="text"
          className="form-control rounded-4"
          id="name"
          placeholder="Masukan Nama"
          value={fullName}           
          onChange={(e) => setFullName(e.target.value)}
          
        />
      </div>
      <div className="mb-3">
        <label id="formGroupExampleInput4" className="form-label">
          Email
        </label>
        <input
          disabled
          type="email"
          className="form-control rounded-4"
          id="email"
          placeholder="Masukan Email"
          value={email}
        />
      </div>
      <div className="mb-3">
        <label id="formGroupExampleInput4" className="form-label">
          Nomor Telepon
        </label>
        <input
          type="number"
          className="form-control rounded-4"
          id="phone"
          placeholder="Masukkan Nomor Telepon"
          value={noTelp}
          onChange={(e) => setNoTelp(e.target.value)}
          maxLength={13}
          minLength={10}

        />
      </div>
      <div className="mb-3">
        <label id="formGroupExampleInput4" className="form-label">
          Negara
        </label>
        <input
          type="text"
          className="form-control rounded-4"
          id="country"
          placeholder="Masukkan Negara"
          value={country}
          onChange={(e) => setCountry(e.target.value)}

        />
      </div>
      <div className="mb-2">
        <label id="formGroupExampleInput4" className="form-label">
          Kota
        </label>
        <input
          type="text"
          className="form-control rounded-4"
          id="city"
          placeholder="Masukkan Kota "
          value={city}
          onChange={(e) => setCity(e.target.value)}

        />
      </div>
      <div className="mb-3">
        <br />
        <button
          type="submit" 
          className="btn rounded-5 text-light"
          style={{ backgroundColor: `var(--primary-purple)`, width: "100%", fontWeight:"700", height:"48px" }}
        >
          Simpan Profil Saya
        </button>
      </div>
      <style>{`
        input {
          height: 48px;
        }

        label {
          font-weight: 600
        }

        .register {
          font-family: Poppins;
          font-size: 14px;
          font-weight: 400;
          text-align: left;
        }
      `}</style>
    </form>
  )
}

export default MyProfile;


