import axios from "axios";

const token = localStorage.getItem("token");

const header = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

const deleteCourse = async (courseCode) => {
  try {
    await axios.delete(`${import.meta.env.VITE_API}/api/admin/${courseCode}`, {
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
