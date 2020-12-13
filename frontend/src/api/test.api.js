import axios from "axios";

export const testActionAPI = () => {
  if (process.env.NODE_ENV !== "production") {
    console.log("coucou pas prod");
  } else {
    console.log("coucou prod");
  }
};
