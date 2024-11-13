import { post } from "../utils/fetch";
import Cookies from "js-cookie";

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
  return post(`user/register/`, {
    full_name,
    phone_number,
    email,
    password,
  });
};

export const isLoggedIn = () => {
  return !!Cookies.get("access");
};

export const logout = async () => {
  Cookies.remove("access");
  Cookies.remove("refresh");
};

export const resetPassword = (email: string) => {
  return post(`auth/reset/`, { email });
};

export const validateResetToken = (token: string) => {
  return post(`auth/reset/validate_token/`, { token });
};

export const setNewPassword = (password: string, token: string) => {
  return post(`auth/reset/confirm/`, { password, token });
};
