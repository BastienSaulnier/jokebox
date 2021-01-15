import axios from "axios";
import { API_URL } from "./init.api";

export const loginAPI = (values) => axios.post(`${API_URL}/login`, { values });
