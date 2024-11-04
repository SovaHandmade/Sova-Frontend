import axios from "axios";
import Cookies from "js-cookie";

const API_BASE = "http://localhost:5555/api";

export const get = async (url: string, params?: object) => {
  const headers = {};

  if (Cookies.get("access")) {
    headers["Authorize"] = `JWT ${Cookies.get("access")}`;
  }

  console.log(headers);

  const response = await axios.get(`${API_BASE}/${url}`, {
    headers,
    params,
  });

  return response.data;
};

export const post = async (url: string, data: object) => {
  const headers = {};

  if (Cookies.get("access")) {
    headers["Authorize"] = `JWT ${Cookies.get("access")}`;
  }

  const response = await axios.post(`${API_BASE}/${url}`, data, {
    headers,
  });

  return response.data;
};
