import * as userConsts from "../consts/user.consts";
import { getUserAPI } from "../../api/user.api";

export const getUser = () => ({
  type: userConsts.GET_USER,
  payload: getUserAPI(),
});
