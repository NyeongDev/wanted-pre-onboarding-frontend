import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL;
const token = localStorage.getItem("accessToken");

export const addTodoApi = async todoContent => {
  try {
    const response = await axios.post(`${API_URL}/todos`, todoContent, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (err) {
    return err.response.status;
  }
};

export const getTodosApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/todos`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (err) {
    return err.response.status;
  }
};

export const delTodoApi = async todoId => {
  try {
    const response = await axios.delete(`${API_URL}/todos/${todoId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.status;
  } catch (err) {
    return err.response.status;
  }
};

export const updateTodoApi = async todoItem => {
  try {
    const response = await axios.put(
      `${API_URL}/todos/${todoItem.id}`,
      todoItem.todo,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (err) {
    return err.response.status;
  }
};
