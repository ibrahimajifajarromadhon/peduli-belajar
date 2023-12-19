import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const header = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

const deleteCourse = async (courseCode) => {
  console.log(courseCode)
  console.log(token)
  try {
    await axios.delete(`${import.meta.env.VITE_API}/api/admin/course/${courseCode}`, {
      headers: header
    });
    console.log("delete course success", courseCode);
    // setRefresh(true);  ditambahkan besok
  } catch (error) {
    console.log("error deleting course", error.message);
    throw error;
  }
};

export default deleteCourse;
