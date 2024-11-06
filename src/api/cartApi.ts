import { CartItemType } from "../types/CartItemType";

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
