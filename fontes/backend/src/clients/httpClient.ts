import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../config';

class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string, defaultConfig?: AxiosRequestConfig) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: defaultConfig?.timeout || 10000,
      headers: defaultConfig?.headers || {},
    });

    // Interceptors de log ou erro
    this.axiosInstance.interceptors.request.use((req) => {
      config.logger.info(`HTTP Request: ${req.method?.toUpperCase()} ${req.url}`);
      return req;
    });

    this.axiosInstance.interceptors.response.use(
      (res: AxiosResponse) => res,
      (err) => {
        config.logger.error(`HTTP Error: ${err.message}`);
        return Promise.reject(err);
      }
    );
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.get<T>(url, config);
  }

  post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.axiosInstance.post<T>(url, data, config);
  }

  put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.axiosInstance.put<T>(url, data, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.delete<T>(url, config);
  }

  // Possível adicionar patch, head etc.
}

export default HttpClient;
