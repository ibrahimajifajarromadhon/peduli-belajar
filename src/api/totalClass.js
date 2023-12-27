import axios from "axios";
import Cookies from "js-cookie";

const totalClass = async () => {
  const token = Cookies.get("token");
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API}/api/admin/total-course`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("gagal mengambil api", error.message);
  }
};

export default totalClass;
