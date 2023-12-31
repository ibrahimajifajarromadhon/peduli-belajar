import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const header = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

const searchAdmin = async (titleCourse ) => {
    console.log(titleCourse)
    try {
        const response = await axios.get(`${import.meta.env.VITE_API}/api/course/filter?title=${titleCourse}`, {
            headers: header
        })
        return response.data
    }catch(error){
        throw error;
    }
}

export default searchAdmin;