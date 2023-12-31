import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const header = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
};

const addSubjectUpdate = async (chapterId, subjectData) => {
    try {
        const response = await axios.post(
            `${
                import.meta.env.VITE_API
            }/api/admin/subject?chapterId=${chapterId}`,
            subjectData,
            {
                headers: header,
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default addSubjectUpdate;
