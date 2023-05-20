import axios from "axios";

export const api = axios.create({
  baseURL: "https://demo-ecommerce-sy9b.onrender.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
