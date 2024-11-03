import { get, post } from "./fetch";

import Cookies from "js-cookie";

export const getProducts = () => {
  return get("store/product/");
};

export const getProduct = (id: number) => {
  return get(`store/product/${id}/`);
};

export const getTags = () => {
  return get(`store/tags/`);
};

export const getOrders = async () => {
  return get(`order/`, Cookies.get("access"));
};

export const login = async (email: string, password: string) => {
  const response = await post(`user/login/`, { email, password });

  if (!response) {
    return false;
  }

  if (response.access && response.refresh) {
    Cookies.set("access", response.access);
    Cookies.set("refresh", response.refresh);
  }

  return true;
};

export const register = async (
  full_name: string,
  phone_number: string,
  email: string,
  password: string
) => {
  const response = await post(`user/register/`, {
    full_name,
    phone_number,
    email,
    password,
  });

  if (!response) {
    return false;
  }

  login(email, password);

  return true;
};

export const profile = async () => {
  return get(`user/me/`, Cookies.get("access"));
};

export const isLoggedIn = () => {
  return !!Cookies.get("access");
};
