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

export const getCategories = async () => {
  try {
    const response = await api.get("/products/categories");
    return response.data.categories;
  } catch (err) {
    console.log(err);
  }
};

export const searchProduct = async (searchValue: string) => {
  const body = {
    search_value: searchValue,
  };
  try {
    const response = await api.post("/products/search", body);
    if (!searchValue) {
      return [];
    } else {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};
