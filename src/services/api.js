import axios from "axios";
import { getToken } from "../services/auth";

export const getBaseURL = () => "http://gerarme-api.test"

const api = axios.create({
  baseURL: "http://gerarme-api.test"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;