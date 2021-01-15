import axios from "axios";
import { API_URL } from "./init.api";

export const signUpAPI = (values) =>
  axios.post(`${API_URL}/signup`, { values });
