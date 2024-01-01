import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

const deleteCourse = async (courseCode) => {
  const token = Cookies.get("token");
  try {
    await axios.delete(`${import.meta.env.VITE_API}/api/admin/course/${courseCode}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    toast.success(`Data course berhasil dihapus!`, {
      style: {
        fontFamily: 'Montserrat'
      },
    });
  } catch (error) {
    throw error;
  }
};

export default deleteCourse;
