import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const header = {
    Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
} 

const getDetailChapter = async (chapterId) => {
    console.log(chapterId)
    try{
        const response = await axios.get(`${import.meta.env.VITE_API}/api/admin/course/${chapterId}`, {
            headers : header
        });
        console.log(response.data)
        return response.data
    }catch(error){
        throw error;
    }
}

export default getDetailChapter;