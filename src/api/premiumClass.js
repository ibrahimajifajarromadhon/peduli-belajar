import axios from "axios";
import Cookies from "js-cookie";
import { LuHeartOff } from "react-icons/lu";

const token = Cookies.get("token");
const header = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

const activeUser = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API}/api/admin/total-premium-course`,
      {
        headers: header,
      }
    );
    return response.data;
  } catch (error) {
    console.log("gagal mengambil api", error.message);
  }
};

export default activeUser;
