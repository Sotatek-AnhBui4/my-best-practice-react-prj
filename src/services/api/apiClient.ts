import type { AxiosRequestConfig } from 'axios';

import { axiosInstance } from './axiosInstance';

class ApiClient {
  get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.get<T>(endpoint, config).then((response) => response.data);
  }

  post<T>(endpoint: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.post<T>(endpoint, data, config).then((response) => response.data);
  }

  put<T>(endpoint: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.put<T>(endpoint, data, config).then((response) => response.data);
  }

  patch<T>(endpoint: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.patch<T>(endpoint, data, config).then((response) => response.data);
  }

  delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.delete<T>(endpoint, config).then((response) => response.data);
  }
}

export const apiClient = new ApiClient();

export type { AxiosRequestConfig };
