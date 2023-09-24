import axios from 'axios';

const API_URL = 'http://localhost:8080/admin/signup';

export const createAdmin = async (adminData) => {
  try {
    const response = await axios.post(API_URL, adminData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

