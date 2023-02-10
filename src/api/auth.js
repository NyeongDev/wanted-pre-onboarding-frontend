import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL;

export const signUpApi = async formContent => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, formContent);
    return response.status;
  } catch (err) {
    return err.response.status;
  }
};

export const signInApi = async formContent => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, formContent);
    return (
      window.localStorage.setItem("accessToken", response.data.access_token),
      response.status
    );
  } catch (err) {
    return err.response.status;
  }
};
