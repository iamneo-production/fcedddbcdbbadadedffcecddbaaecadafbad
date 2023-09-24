import axios from 'axios';

const API_URL = 'https://8080-fcedddbcdbbadadedffcecddbaaecadafbad.premiumproject.examly.io/admin/signup';

export const createAdmin = async (adminData) => {
  try {
    const response = await axios.post(API_URL, adminData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

