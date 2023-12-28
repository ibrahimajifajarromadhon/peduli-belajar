import axios from "axios";
import Cookies from "js-cookie";

const apiUrl = `${import.meta.env.VITE_API}/api/admin/manage-course`;

const getAllCourses = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q");
  const token = Cookies.get("token");

  try {
    const response = await axios.get(
      query === "" || query === null
        ? apiUrl
        : `${import.meta.env.VITE_API}//api/course/filter?title=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error.message);
    throw error;
  }
};

export default getAllCourses;
