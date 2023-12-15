import axios from "axios";

const apiUrl = `${import.meta.env.VITE_API}/api/course/filter`;

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
// import axios from "axios";

// const apiUrl = `${import.meta.env.VITE_API}/api/course/filter`;

// const getAllCourses = async (options) => {
//   try {
//     const response = await axios.get(apiUrl, { params: options });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching courses:", error.message);
//     throw error;
//   }
// };

// export default getAllCourses;
