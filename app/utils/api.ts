// lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
  },
});

// Interceptor para agregar Authorization si hay token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // o desde un context/estado global
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
