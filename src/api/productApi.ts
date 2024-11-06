import { get, post } from "../utils/fetch";

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

export const createProduct = async (productData: FormData) => {
  try {
    const product = await post(`store/product/`, productData);

    return product;
  } catch {
    return false;
  }
};

export const getProduct = (id: number) => {
  return get(`store/product/${id}/`);
};

export const getTags = () => {
  return get(`store/tags/`);
};
