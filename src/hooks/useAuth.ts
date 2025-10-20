import { authService } from '@/services/authService';
import { useAuthStore } from '@/stores/useAuthStore';

export const useAuth = () => {
  const {
    login: setLoginState,
    logout: clearAuthState,
    setLoading,
    setError,
    isLoading,
    error,
    user,
    isAuthenticated,
  } = useAuthStore();

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authService.login({ email, password });
      setLoginState(response.user, response.token);
      console.log('Login successful:', response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await authService.logout();
      clearAuthState();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getCurrentUser = async () => {
    try {
      setLoading(true);
      const user = await authService.getCurrentUser();
      useAuthStore.getState().setUser(user);
      return user;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to fetch user information');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    logout,
    getCurrentUser,
    isLoading,
    error,
    user,
    isAuthenticated,
  };
};
