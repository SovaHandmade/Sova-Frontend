import axios from "axios";
import Cookies from "js-cookie";

const API_BASE = "http://localhost:5555/api";

const getAuthHeaders = () => {
  const headers: { [key: string]: string } = {};

  if (Cookies.get("access")) {
    headers["Authorize"] = `JWT ${Cookies.get("access")}`;
  }

  return headers;
};

export const get = async (url: string, params?: object) => {
  const headers = getAuthHeaders();

  const response = await axios.get(`${API_BASE}/${url}`, {
    headers,
    params,
  });

  return response.data;
};

export const post = async (url: string, data: object) => {
  const headers = getAuthHeaders();

  const response = await axios.post(`${API_BASE}/${url}`, data, {
    headers,
  });

  return response.data;
};

export const patch = async (url: string, data: object) => {
  const headers = getAuthHeaders();

  const response = await axios.patch(`${API_BASE}/${url}`, data, {
    headers,
  });

  return response.data;
};
