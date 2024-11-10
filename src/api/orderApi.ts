import { get, post } from "../utils/fetch";
import { CartItemType } from "../types/CartItemType";

export const getOrders = async () => {
  return get(`order/`);
};

export const createOrder = async (cart: CartItemType[]) => {
  try {
    await post(`order/`, {
      items: cart,
    });

    return true;
  } catch {
    return false;
  }
};
