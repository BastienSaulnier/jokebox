import * as testConsts from "../consts/test.consts";
import { testActionAPI } from "../../api/test.api";

export const testAction = () => ({
  type: testConsts.TEST_ACTION,
  payload: testActionAPI(),
});
