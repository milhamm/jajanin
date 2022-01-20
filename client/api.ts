import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "/api",
});

const onResponseSuccess = (response: AxiosResponse<any, any>) => {
  return response.data;
};

api.interceptors.response.use(onResponseSuccess);

export const fetcher = <T>(url: string, config: AxiosRequestConfig) =>
  api.get<unknown, T>(url, config).then((res) => res);

export default api;
