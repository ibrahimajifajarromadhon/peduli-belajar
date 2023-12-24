import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

const token = Cookies.get("token");

const header = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

const deleteCourse = async (courseCode) => {
  try {
    await axios.delete(`${import.meta.env.VITE_API}/api/admin/course/${courseCode}`, {
      headers: header
    });
    toast.success(`Data Course  Berhasil Dihapus`);
    // setRefresh(true);  ditambahkan besok
  } catch (error) {
    console.log("error deleting course", error.message);
    throw error;
  }
};

export default deleteCourse;
