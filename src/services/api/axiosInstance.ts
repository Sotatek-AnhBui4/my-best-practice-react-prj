import axios, { AxiosError } from 'axios';

import { API_BASE_URL } from '@/config/env';
import type { ApiError } from '@/types/api';

type ErrorData = Partial<ApiError> & {
  message?: string;
};

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorData>) => {
    const message =
      error.response?.data?.message || error.message || 'An unexpected error occurred';

    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
    }

    const normalizedError: ApiError & { status?: number; cause?: AxiosError<ErrorData> } = {
      success: false,
      message,
      errors: error.response?.data?.errors,
      status: error.response?.status,
      cause: error,
    };

    return Promise.reject(normalizedError);
  }
);
