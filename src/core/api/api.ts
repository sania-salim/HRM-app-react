import axios from "axios";

const api = axios.create({
  baseURL: "http://3.145.178.76:4000",
  timeout: 120000,
});

export const getData = (url: string) => {
  return api.get(url);
};
