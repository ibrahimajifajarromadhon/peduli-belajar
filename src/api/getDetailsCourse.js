import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const header = {
    Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
} 

const getDetailCourse = async (courseCode) => {
    try{
        const response = await axios.get(`${import.meta.env.VITE_API}/api/course/${courseCode}`, {
            headers : header
        });
        return response.data
    }catch(error){
        console.log("gagal", error.message)
        throw error;
    }
}

export default getDetailCourse;