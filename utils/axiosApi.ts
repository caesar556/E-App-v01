import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://e-app-api.vercel.app",
  withCredentials: true,
});

let isRefreshing = false;
let refreshSubscribers: any[] = [];

function onRefreshed() {
  refreshSubscribers.forEach((callback) => callback());
  refreshSubscribers = [];
}

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          await axios.post(
            "https://e-app-api.vercel.app/api/auth/refresh-token",
            {},
            {
              withCredentials: true,
            },
          );

          isRefreshing = false;
          onRefreshed();

          return axiosInstance(originalRequest);
        } catch (refreshError) {
          isRefreshing = false;
          return Promise.reject(refreshError);
        }
      }

      return new Promise((resolve) => {
        refreshSubscribers.push(() => {
          resolve(axiosInstance(originalRequest));
        });
      });
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
