import axios from "axios";

const apiUrl = `${import.meta.env.VITE_API_URL}/api/auth/regenerate-otp`;

async function otpRequest(email) {
    const urlWithQuery = `${apiUrl}?email=${encodeURIComponent(email)}`;
    try {
        const response = await axios.put(urlWithQuery);
        return response.data;
    } catch (error) {
        throw error.message;
    }
}

export { otpRequest };
