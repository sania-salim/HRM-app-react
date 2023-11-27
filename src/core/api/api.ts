import axios from "axios";

const api = axios.create({
  baseURL: "https://vipinms.cloud/",
  timeout: 120000,
});

export const getData = (url: string) => {
  return api.get(url);
};

export const postData = (url: string, payload: object) => {
  return api.post(url, payload);
};
