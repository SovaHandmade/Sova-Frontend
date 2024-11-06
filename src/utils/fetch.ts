import axios from "axios";
import Cookies from "js-cookie";

const API_BASE = import.meta.env.VITE_API_BASE;

const getAuthHeaders = () => {
  const headers: { [key: string]: string } = {};

  if (Cookies.get("access")) {
    headers["Authorize"] = `JWT ${Cookies.get("access")}`;
  }

  return headers;
};

const request = async (
  method: "get" | "post" | "patch",
  url: string,
  data?: object,
  params?: object
) => {
  const headers = getAuthHeaders();

  const response = await axios({
    method,
    url: `${API_BASE}/${url}`,
    headers,
    data,
    params,
  });

  return response.data;
};

export const get = (url: string, params?: object) => {
  request("get", url, undefined, params);
};

export const post = (url: string, data: object) => {
  request("post", url, data);
};

export const patch = (url: string, data: object) => {
  request("patch", url, data);
};
