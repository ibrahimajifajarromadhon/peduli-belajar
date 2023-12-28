import axios from "axios";
import Cookies from "js-cookie";

// const header = {

//     "Content-Type": "application/json",
// }

const getMyCourse = async () => {
  const token = Cookies.get("token");
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API}/api/course/my-course?size=50`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data.courses);
    return response.data.data.courses;
  } catch (error) {
    console.log("gagal ambil api", error.message);
  }
};

export default getMyCourse;
