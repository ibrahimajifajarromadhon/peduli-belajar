import axios from "axios";

const apiUrl = `${import.meta.env.VITE_API}/api/course/filter?page=1&size=20`;

const getAllCourses = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response;
  } catch (error) {
    console.error("Error fetching courses:", error.message);
    throw error;
  }
};

export default getAllCourses;
