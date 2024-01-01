import axios from "axios";
import Cookies from "js-cookie";

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
    return response.data
  } catch (error) {
    console.log("Error update course", error.message);
    throw error;
  }
};

export default updateCourse;
