import axios from "axios";
import Cookies from "js-cookie";

const getStatusOrder = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q");
  const token = Cookies.get("token");

  try {
    const url =
      query === " " || query === null
        ? `${import.meta.env.VITE_API}/api/admin/status-order`
        : `${import.meta.env.VITE_API}/api/admin/status-order?title=${query}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log("gagal mengambil api", error.message);
  }
};

export default getStatusOrder;
