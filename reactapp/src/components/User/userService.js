import axios from "axios"; // or import 'isomorphic-fetch';
const API_BASE_URL = "http://localhost:8080/user";
export const createUser = async (userData) => {
  try {alert(userData);
    const response = await axios.post(`https://8080-fcedddbcdbbadadedffcecddbaaecadafbad.premiumproject.examly.io/user/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUsers = async (email) => {
  try {
    const response = await axios.get(`https://8080-fcedddbcdbbadadedffcecddbaaecadafbad.premiumproject.examly.io/user/${email}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  createUser,
  getUsers,
};