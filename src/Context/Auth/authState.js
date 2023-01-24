import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./AuthReducer";
import interceptorForAxios from "../../Components/Tools/setAuthToken";
import axios from "axios";
import { SERVER_URL } from "../constant";

import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  SET_AUTH_HEADER,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  interceptorForAxios();
  const initialState = {
    token: localStorage.getItem("accessToken"),
    isAuthenticated: localStorage.getItem("isAuthenticated"),
    loading: localStorage.getItem("loading"),
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    error: localStorage.getItem("error"),
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    console.log(
      "t11",
      // localStorage.getItem("token"),
      localStorage.token
    );

    // await setAuthToken(localStorage.token);
    try {
      const res = await axios.get(SERVER_URL + "/auth");
      console.log("auth data res", res.data);
      await dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      // dispatch({ type: AUTH_ERROR });
    }
  };

  const setAuthHeader = async (DATA) => {
    await dispatch({
      type: SET_AUTH_HEADER,
      payload: DATA,
    });
  };

  const login = async (formData) => {
    // setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(SERVER_URL + "/login", formData, config);
      // console.log("login:", res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      await loadUser();
      loadUser();
    } catch (err) {
      console.log("loginerror:", err);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response,
      });
    }
  };

  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,

        loadUser,

        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
