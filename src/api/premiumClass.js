import axios from "axios";
import Cookies from "js-cookie";
import { LuHeartOff } from "react-icons/lu";

const activeUser = async () => {
  const token = Cookies.get("token");
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API}/api/admin/total-premium-course`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default activeUser;
