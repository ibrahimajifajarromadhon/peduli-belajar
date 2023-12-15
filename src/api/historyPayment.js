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
        console.log("get payment history success");
        return response.data;
    }catch(error){
        console.log("error get payment history")
        throw error;
    }
};

export default historyPayment;