import axios from "axios";
import { API_URL } from "./init.api";

export const getUserAPI = () => axios.get(`${API_URL}/user/me`);
