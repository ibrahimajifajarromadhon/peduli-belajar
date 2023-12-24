import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token")
const header = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json", 
}

const activeUser = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API}/api/admin/active-user`, {
      headers: header
    });
    return response.data;
  } catch (error) {
    console.log("gagal mengambil api", error.message);
  }
};

export default activeUser;
