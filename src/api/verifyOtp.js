import axios from "axios";

const apiUrl = `${import.meta.env.VITE_API_URL}/api/auth/verify`;

const verifyOtp = async (email, otp) => {
  const urlWithQuery = `${apiUrl}?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`;
  
  console.log("URL with Query:", urlWithQuery); // Tambahkan log ini untuk memeriksa URL

  try {
    const response = await axios.post(urlWithQuery);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default verifyOtp;
