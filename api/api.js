import axios from "axios";

export const api = axios.create({
  baseURL: "https://13.55.102.34.nip.io/",

  // baseURL: "http://localhost:4000",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
