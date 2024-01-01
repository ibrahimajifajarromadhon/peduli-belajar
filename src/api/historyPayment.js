import axios from "axios";

const token = localStorage.getItem("token")
const header = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
};

const historyPayment = async () => {
    try {
        const response = await axios.get(`${import.meta.env}/api/order/payment-history/`, {
            headers: header
        });
        return response.data;
    }catch(error){
        throw error;
    }
};

export default historyPayment;