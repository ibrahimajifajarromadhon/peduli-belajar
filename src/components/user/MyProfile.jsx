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
      console.error('Terjadi kesalahan:', error);
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
      if (profilePicture instanceof File) {
        formData.append('profilePicture', profilePicture);
      } else if (typeof profilePicture === 'string') {
        // If profilePicture is a URL, download the image and convert it to a File
        const response = await fetch(profilePicture);
        const blob = await response.blob();
        const file = new File([blob], 'profile_picture.jpg', { type: 'image/jpeg' });
        formData.append('profilePicture', file);
      }
      
      const response = await fetch(`${import.meta.env.VITE_API}/api/user/edit-profile`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: formData,
      });
  
      const responseData = await response.json();
      console.log(responseData);
      toast.success('Data profil berhasil disimpan!')
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      toast.error('Data profil gagal disimpan!')
    } finally {
      setIsLoading(false);
    }
  };
  const onProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };
  return (
    <form onSubmit={onSubmit} className="register w-50 p-3 d-flex flex-column justify-content-center w-100">
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
              style={{ width: '2.2em', height: '2.2em' }}
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
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Nama
        </label>
        <input 
          disabled={!isLoading.toString()}
          type="text"
          className="form-control rounded-3"
          id="name"
          placeholder="Masukan Nama"
          value={fullName}           
          onChange={(e) => setFullName(e.target.value)}
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Email
        </label>
        <input
          disabled={isLoading.toString()}  
          type="email"
          className="form-control rounded-3"
          id="email"
          placeholder="Masukan Email"
          value={email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Nomor Telepon
        </label>
        <input
          disabled={!isLoading.toString()}
          type="number"
          className="form-control rounded-3"
          id="phone"
          placeholder="Masukkan Nomor Telepon"
          value={noTelp}
          onChange={(e) => setNoTelp(e.target.value)}
          maxLength={13}
          minLength={10}

        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Negara
        </label>
        <input
          disabled={!isLoading.toString()}
          type="text"
          className="form-control rounded-3"
          id="country"
          placeholder="Masukkan Negara"
          value={country}
          onChange={(e) => setCountry(e.target.value)}

        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Kota
        </label>
        <input
          disabled={!isLoading.toString()}
          type="text"
          className="form-control rounded-3"
          id="city"
          placeholder="Masukkan Kota "
          value={city}
          onChange={(e) => setCity(e.target.value)}

        />
      </div>
      <div className="mb-3">
        <br />
        <button
          disabled={!isLoading.toString()}
          type="submit" 
          className="btn rounded-4 text-light"
          style={{ backgroundColor: `var(--primary-purple)`, width: "100%", fontWeight:"700" }}
        >
          Simpan Profil Saya
        </button>
      </div>
      <style>{`
        input {
          height: 48px
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


