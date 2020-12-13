import axios from "axios";

if (process.env.NODE_ENV !== "production") {
  var API_URL = process.env.REACT_APP_DEV_API_URL;
} else {
  var API_URL = process.env.REACT_APP_PROD_API_URL;
}
export const testActionAPI = () => {
  console.log(API_URL);
};
