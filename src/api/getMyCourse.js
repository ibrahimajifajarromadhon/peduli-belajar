import axios from "axios";
import Cookies from "js-cookie";

const getMyCourse = async () => {
  const token = Cookies.get("token");
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API}/api/course/my-course?size=20`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data.courses;
  } catch (error) {
    console.log("gagal ambil api", error.message);
  }
};

export default getMyCourse;