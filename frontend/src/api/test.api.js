import axios from "axios";

export const testActionAPI = () =>
  axios.get("http://localhost:5000/test/route");
