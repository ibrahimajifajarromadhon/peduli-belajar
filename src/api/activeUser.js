import axios from "axios";

const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${authToken}`,
  "Content-Type": "application/json",
};

const activeUser = async () => {
    try {
        const response = await axios.get(`${import.meta.env}`);

    }
} 