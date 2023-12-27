import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token")
const header = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json", 
}

const getMyCourse = async () => {
    try{
        const response = await axios.get(`${import.meta.env.VITE_API}/api/course/my-course?size=20`, {
            headers: header
        })
        console.log(response.data.data.courses)
        return response.data.data.courses
    }catch(error){
        console.log("gagal ambil api", error.message)
    }
}

export default getMyCourse;