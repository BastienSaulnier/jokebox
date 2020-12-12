/* import axios from "axios"; */

import axios from "axios";

export const testActionAPI = () =>
  axios.get("https://jokeboxwbs.herokuapp.com/test/route");
