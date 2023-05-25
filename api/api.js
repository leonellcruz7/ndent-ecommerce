import axios from "axios";

export const api = axios.create({
  baseURL: "http://ec2-13-55-102-34.ap-southeast-2.compute.amazonaws.com:4000/",

  // baseURL: "http://localhost:4000",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
