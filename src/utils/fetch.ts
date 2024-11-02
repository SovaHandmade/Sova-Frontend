import axios from "axios";

const API_BASE = "http://localhost:5555/api";

export const get = async (url: string) => {
  const response = await axios.get(`${API_BASE}/${url}`);

  return response.data;
};

export const post = async (url: string, data: object) => {
  const response = await axios.post(`${API_BASE}/${url}`, data);

  return response.data;
};
