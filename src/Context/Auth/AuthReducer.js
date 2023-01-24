import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  SET_AUTH_HEADER,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";
import setAuthToken from "../../Components/Tools/setAuthToken";

export default (state, action) => {
  switch (action.type) {
    case SET_AUTH_HEADER:
      return {
        ...state,
        token: action.payload,
      };

    case USER_LOADED:
      localStorage.isAuthenticated = true;
      localStorage.loading = false;
      localStorage.user = JSON.stringify(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case LOGIN_SUCCESS:
      localStorage.accessToken = action.payload.accessToken;
      localStorage.refreshToken = action.payload.refreshToken;
      localStorage.isAuthenticated = true;
      localStorage.loading = false;
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        //token: action.payload.token,
      };
    // case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("loading");
      localStorage.removeItem("user");
      localStorage.removeItem("error");
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        loading: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
