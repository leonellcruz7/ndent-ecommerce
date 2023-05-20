import { api } from "../api/api";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProductDetails = async (productId: string) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
