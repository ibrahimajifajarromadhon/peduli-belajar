import axios from "axios";

const token = localStorage.getItem("token");
const header = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

const premiumClass = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API}`, {
            headers: header
        });
        console.log("success get api premium class", response)
    }catch (error) {
        console.log("error get api ", error.message);
        throw error;
    }
};

export default premiumClass;