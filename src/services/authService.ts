import { apiClient } from '@/services/api/apiClient';
import type { LoginCredentials, User } from '@/types/auth';

const TOKEN_STORAGE_KEY = 'auth_token';

export const authService = {
  login: async (credentials: LoginCredentials): Promise<{ user: User; token: string }> => {
    const data = await apiClient.post<{ user: User; token: string }>('/auth/login', credentials);

    if (data.token) {
      localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
    }

    return data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post('/auth/logout');
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  },

  getCurrentUser: async (): Promise<User> => {
    return apiClient.get<User>('/auth/me');
  },
};
