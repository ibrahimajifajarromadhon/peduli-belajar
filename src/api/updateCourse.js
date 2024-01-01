import axios from "axios";
import Cookies from "js-cookie";
import { toast } from 'react-hot-toast';

const token = Cookies.get("token");
const header = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

const updateCourse = async (courseCode, updateData) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API}/api/admin/course/${courseCode}`,
      updateData,  
      {
        headers: header,
      }
    );
    toast.success("Berhasil ubah data course!", {
      style: {
        fontFamily: 'Montserrat'
      },
    });

    return response.data
  } catch (error) {
    console.log("Error update course", error.message);
    throw error;
  }
};

export default updateCourse;
