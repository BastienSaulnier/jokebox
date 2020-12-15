import axios from "axios";
import { API_URL } from "./init.api";

export const loginAPI = (emailValue, passwordValue) =>
  axios.post(`${API_URL}/login`, { emailValue, passwordValue });
