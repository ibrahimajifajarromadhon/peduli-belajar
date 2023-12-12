import axios from "axios";

const token = localStorage.getItem("token")
const apiUrl = `${import.meta.env.VITE_API}/api/admin/order/status-order`;

const getStatusOrder = async () => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", 
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("gagal mengambil api", error.message);
  }
};

export default getStatusOrder;
