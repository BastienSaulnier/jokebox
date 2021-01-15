import * as userConsts from "../consts/user.consts";
import * as loginConsts from "../consts/login.consts";

const initState = {
  firstname: null,
  lastname: null,
  username: null,
  email: null,
  avatarUrl: null,
  avatarUrlThumbnail: null,
  isVerified: false,
};

const user = (state = initState, action) => {
  switch (action.type) {
    case userConsts.GET_USER_FULFILLED:
      return {
        ...state,
        firstname: action.payload.data.firstname,
        lastname: action.payload.data.lastname,
        username: action.payload.data.username,
        email: action.payload.data.email,
        avatarUrl: action.payload.data.avatar_url,
        avatarUrlThumbnail: action.payload.data.avatar_url_thumbnail,
        isVerified: action.payload.data.is_verified,
      };

    case loginConsts.LOGOUT:
      return {
        ...state,
        firstname: null,
        lastname: null,
        username: null,
        email: null,
        avatarUrl: null,
        avatarUrlThumbnail: null,
        isVerified: false,
      };

    default:
      return state;
  }
};

export default user;
