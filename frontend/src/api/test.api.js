import axios from "axios";

export const testActionAPI = () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`made api call to ${process.env.REACT_APP_DEV_API_URL}`);
  } else {
    console.log(`made api call to ${process.env.REACT_APP_PROD_API_URL}`);
  }
};
