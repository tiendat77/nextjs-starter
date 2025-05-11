import { STORAGE_KEYS } from '@/constants/storage.enum';
import axios, { AxiosError } from 'axios';
import { renewToken } from './auth';

// get token from localStorage
function getAccessToken() {
  return window?.localStorage?.getItem(STORAGE_KEYS.ACCESS_TOKEN) ?? '';
}

function getRefreshToken() {
  return window?.localStorage?.getItem(STORAGE_KEYS.REFRESH_TOKEN) ?? '';
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (request) => {
    // check if request if from client side
    if (typeof window === 'undefined') {
      return request;
    }

    const token = getAccessToken();

    // add token to header before sending request
    request.headers.Authorization = `Bearer ${token}`;

    return request;
  },
  async (error: AxiosError) => {
    const { response, config } = error;
    const status = response?.status;

    if (status === 401 || status === 403) {
      try {
        const accessToken = getAccessToken();
        const refreshToken = getRefreshToken();
        const response = await renewToken(accessToken, refreshToken);

        // Save new token to storage
        window.localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, response.accessToken);
        window.localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, response.refreshToken);

        config.headers.Authorization = `Bearer ${response.accessToken}`;

        return axios(config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }
);

export default axiosInstance;
