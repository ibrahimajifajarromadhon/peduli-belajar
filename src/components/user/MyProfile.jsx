import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

function MyProfile() {
  const [fullName, setFullName] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [fullNameUser, setFullNameUser] = useState("");
  const [noTelpUser, setNoTelpUser] = useState("");
  const [cityUser, setCityUser] = useState("");
  const [countryUser, setCountryUser] = useState("");
  const [profilePictureUser, setProfilePictureUser] = useState("");

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
      }).finally (() => {
        
      })
      setIsLoading(false);

  },[])

  const onProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const formData = new FormData();
      formData.append("profilePicture", profilePictureUser); 
      formData.append("fullName", fullNameUser);
      // formData.append("email", email);
      formData.append("noTelp", noTelpUser);
      formData.append("country", countryUser);
      formData.append("city", cityUser);
      
      const config = {
        method: "put",
        url: `${import.meta.env.VITE_API}/api/user/edit-profile`,
        headers: {
          "Content-Type": "application/json", 
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        data: formData,
      };
  
      const response = await axios.request(config);
      console.log(response.data);
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      // setValidation(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={onSubmit} className="register w-50 p-3 d-flex flex-column justify-content-center w-100">
      <div className="d-flex align-items-center mb-3">
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={onProfilePictureChange}
          />
          {profilePicture && (
            <img
              src={profilePicture}
              alt="Profile"
              style={{ width: '90px', height: '90px', marginTop: '10px' }}
            />
          )}
        </div>
        <div style={{ marginLeft: '20px' }}>
          <p>Profile Picture URL:</p>
          {profilePicture && (
            <img
              src={profilePicture}
              alt="Profile"
              style={{ width: '90px', height: '90px' }}
            />
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
          onChange={(e) => setFullNameUser(e.target.value)}
          
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
          // onChange={(e) => setEmail(e.target.value)}

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
          onChange={(e) => setNoTelpUser(e.target.value)}
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
          onChange={(e) => setCountryUser(e.target.value)}

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
          onChange={(e) => setCityUser(e.target.value)}

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
      `}</style>
    </form>
  )
}

export default MyProfile;


