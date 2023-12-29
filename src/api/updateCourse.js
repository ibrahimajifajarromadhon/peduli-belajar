import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

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
    console.log('success update data', response.data)
    return response.data
  } catch (error) {
    console.log("error update coursse", error.message);
    throw error;
  }
};

export default updateCourse;
