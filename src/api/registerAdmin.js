import axios from "axios";

const apiUrl = `${import.meta.env.VITE_API_URL}/api/auth/signup`;

const registrasiAdmin = async ({ fullName, email, nomorTelepon, password }) => {
  try {
    const response = await axios.post(apiUrl, {
      fullName,
      email,
      nomorTelepon,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default registrasiAdmin;
