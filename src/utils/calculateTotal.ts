import { CartItemType } from "../types/CartItemType";

export const calculateTotal = (cart: CartItemType[]) => {
  let total = 0;

  for (const cartItem of cart) {
    total += cartItem.price * cartItem.quantity;
  }

  return total;
};
