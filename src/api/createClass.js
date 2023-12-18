import axios from 'axios';
import Cookies from 'js-cookie';

const apiUrl = `${import.meta.env.VITE_API}/api/admin/course`;
const authToken = Cookies.get("token");

const createClass = async (classData) => {
  const headers = {
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.post(apiUrl, classData, { headers });
    console.log('Success:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error; 
  }
};

export { createClass };
