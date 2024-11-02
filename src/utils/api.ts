import { get } from "./fetch";

export const getProducts = () => {
  return get("store/product");
};

export const getProduct = (id: number) => {
  return get(`store/product/${id}`);
};

export const getTags = () => {
  return get(`store/tags`);
};
