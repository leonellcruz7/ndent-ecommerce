import axios from "axios";

export const api = axios.create({
  baseURL: "http://ec2-3-27-91-113.ap-southeast-2.compute.amazonaws.com/",

  // baseURL: "http://localhost:4000",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
