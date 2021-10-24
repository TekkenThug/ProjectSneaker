import axios from 'axios';
import storeState from '@/services/storeState';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

const useTokenInRequests = (config) => {
  const token = storeState.getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
};

const handlerForTokens = async (e) => {
  if (
    !storeState.getRefreshToken()
    || e.response.status !== 401
    || e.config.retry
  ) throw e;

  await storeState.updateTokens();

  const newRequest = {
    ...e.config,
    retry: true,
  };

  return axiosInstance(newRequest);
};

axiosInstance.interceptors.request.use(useTokenInRequests);
axiosInstance.interceptors.response.use((res) => res, handlerForTokens);

export default axiosInstance;
