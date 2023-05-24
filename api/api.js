import axios from "axios";

export const api = axios.create({
  baseURL: "http://ec2-3-26-43-101.ap-southeast-2.compute.amazonaws.com:4000",
  // baseURL: "http://localhost:4000",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
