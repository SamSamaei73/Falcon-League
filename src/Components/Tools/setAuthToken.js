import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../Context/constant";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["X-Access-Token"] = token;
  } else {
    delete axios.defaults.headers.common["X-Access-Token"];
  }
};

const interceptorForAxios = () => {

  axios.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        config.headers["x-auth-token"] = accessToken;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  //response interceptor to refresh token on receiving token expired error
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      const originalRequest = error.config;
      let refreshToken = localStorage.getItem("refreshToken");

      if (
        refreshToken &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        return axios
          .post(`${SERVER_URL}/refresh_token`, { refreshToken: refreshToken })
          .then((res) => {
            if (res.status === 200) {
              localStorage.setItem("accessToken", res.data.accessToken);
              console.log("Access token refreshed!", res.data.accessToken);
              return axios(originalRequest);
            }
            else if (res.status === 500) {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              localStorage.removeItem("isAuthenticated");
              localStorage.removeItem("loading");
              localStorage.removeItem("user");
              localStorage.removeItem("error");
              window.location.href = '/login';
            }
          });
      } else {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user");
        localStorage.removeItem("loading");
        localStorage.removeItem("error");
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );
};

export default interceptorForAxios;
