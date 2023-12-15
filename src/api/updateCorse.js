import axios from "axios";

const token = localStorage.getItem("token");
const header = {
    Authorization: `Bearer ${token}`;
    'Content-Type': 'application/json',
}

const updateCourse = async (courseCode) => {
    try {
        await axios.put(`${import.meta.env.VITE_API}/api/admin/course/${courseCode}`, {
            headers: header
        });
        console.log("update course success", courseCode);
    }catch (error) {
        console.log("error update coursse", error.message);
        throw error;
    }
};

export default updateCourse;