import axios from "axios";

export const api = axios.create({
  baseURL: "https://demo-ecommerce-sy9b.onrender.com",
  // baseURL: "http://localhost:4000",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
