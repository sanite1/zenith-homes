import Axios, { type AxiosInstance } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Public marketing site: no auth token attach and no refresh flow.
// The only consumer is the public contact endpoint.
export const axios: AxiosInstance = Axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});
