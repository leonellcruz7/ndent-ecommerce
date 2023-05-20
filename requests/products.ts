import { api } from "../api/api";

export const getAllProducts = async () => {
  try {
    const response = await api.get(
      "https://demo-ecommerce-sy9b.onrender.com/products"
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
