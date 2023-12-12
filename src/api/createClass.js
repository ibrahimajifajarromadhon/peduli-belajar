import axios from 'axios';

const apiUrl = `${import.meta.env.VITE_API}/api/admin`;
const authToken = localStorage.getItem("token");

const createClass = async (requestData) => {
    // console.log(requestData)
  const headers = {
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.post(apiUrl, requestData, { headers});
    console.log('Success:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error; 
  }
};

export { createClass };
