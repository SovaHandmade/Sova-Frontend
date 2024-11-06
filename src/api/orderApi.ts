import { get, post } from "../utils/fetch";
import { CartItemType } from "../types/CartItemType";

export const getOrders = async () => {
  return get(`order/`);
};

export const createOrder = async (cart: CartItemType[]) => {
  try {
    console.log(cart);

    const order = await post(`order/`, {
      items: cart,
    });

    console.log(order);

    return true;
  } catch {
    return false;
  }
};
