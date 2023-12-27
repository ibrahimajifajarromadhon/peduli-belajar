import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const header = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
};

const updatedSubject = async (subjectId, subjectData) => {
    try {
        const response = await axios.put(
            `${import.meta.env.VITE_API}/api/admin/subject/${subjectId}`,
            subjectData,
            {
                headers: header,
            }
        );
        return response.data;
    } catch (error) {
        console.log("error update subject", error.message);
        throw error;
    }
};

export default updatedSubject;
