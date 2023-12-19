import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token")
const apiUrl = `${import.meta.env.VITE_API}/api/admin/status-order`;

const getStatusOrder = async () => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", 
      },
    });
    return response.data;
  } catch (error) {
    console.log("gagal mengambil api", error.message);
  }
};

export default getStatusOrder;
