import axios from "axios";
import API_PATHS from "~/constants/apiPaths";

axios.interceptors.request.use((config) => {
  const authorizationToken = localStorage.getItem("authorization_token");
  if (authorizationToken && config.url?.includes(API_PATHS.import)) {
    config.headers = {
      ...config.headers,
      Authorization: `Basic ${localStorage.getItem("authorization_token")}`,
    };
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      alert("Unauthorized: Authorization header is not provided");
    }
    if (status === 403) {
      alert("Forbidden: Invalid token");
    }
    return Promise.reject(error);
  }
);
