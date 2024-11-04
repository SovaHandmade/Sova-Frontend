import { CartItemType } from "../types/CartItemType";
import { get, post } from "./fetch";

import Cookies from "js-cookie";

export const getProducts = ({
  exclude,
  max_length,
  form,
  topic,
}: {
  exclude?: number;
  max_length?: number;
  form?: string;
  topic?: string;
}) => {
  return get("store/product/", {
    exclude,
    max_length,
    form,
    topic,
  });
};

export const getProduct = (id: number) => {
  return get(`store/product/${id}/`);
};

export const getTags = () => {
  return get(`store/tags/`);
};

export const getOrders = async () => {
  return get(`order/`);
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
  return get(`user/me/`);
};

export const logout = async () => {
  Cookies.remove("access");
  Cookies.remove("refresh");
};

export const isLoggedIn = () => {
  return !!Cookies.get("access");
};

export const getCart = () => {
  const currentCartJson = localStorage.getItem("cart");

  let currentCart = [] as CartItemType[];

  if (currentCartJson) {
    currentCart = JSON.parse(currentCartJson);
  }

  return currentCart;
};

export const clearCart = () => {
  localStorage.setItem("cart", JSON.stringify([]));
};

export const addToLocalCart = (product_id: number, price: number) => {
  const currentCart = getCart();

  if (currentCart.some((item) => item.product_id === product_id)) {
    return;
  }

  currentCart.push({ product_id, quantity: 1, price });

  localStorage.setItem("cart", JSON.stringify(currentCart));
};

export const isInLocalCart = (product_id: number) => {
  const currentCart = getCart();

  return currentCart.some((item) => item.product_id === product_id);
};

export const removeFromLocalCart = (product_id: number) => {
  let currentCart = getCart();

  currentCart = currentCart.filter((item) => item.product_id !== product_id);

  localStorage.setItem("cart", JSON.stringify(currentCart));
};

export const updateInLocalCart = (product_id: number, quantity: number) => {
  const currentCart = getCart();

  const product = currentCart.find(
    (item) => item.product_id === product_id
  ) as CartItemType;

  if (!product) {
    return;
  }

  product.quantity = quantity;

  localStorage.setItem("cart", JSON.stringify(currentCart));
};

export const createOrder = async (cart: CartItemType[]) => {
  try {
    console.log(cart);

    const order = await post(
      `order/`,
      {
        items: cart,
      },
      Cookies.get("access")
    );

    console.log(order);

    return true;
  } catch {
    return false;
  }
};
