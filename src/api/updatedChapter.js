import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const header = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
};

const updatedChapter = async (chapterId, chapterData) => {
    try {
        const response = await axios.put(
            `${import.meta.env.VITE_API}/api/admin/chapter/${chapterId}`,
            chapterData,
            {
                headers: header,
            }
        );
        return response.data;
    } catch (error) {
        console.log("error update chapter", error.message);
        throw error;
    }
};

export default updatedChapter;
