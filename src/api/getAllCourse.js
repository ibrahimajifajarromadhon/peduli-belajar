import axios from "axios";

const token = localStorage.getItem("token");
const apiUrl = `${import.meta.env.VITE_API}/api/course`;

const getAllCourses = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error.message);
    throw error;
  }
};

export default getAllCourses;
