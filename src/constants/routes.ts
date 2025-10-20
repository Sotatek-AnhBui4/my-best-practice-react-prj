export const ROUTES = {
  home: '/',
  dashboard: '/dashboard',
  profile: '/profile',
  settings: '/settings',
  authSignin: '/auth/signin',
  authSignup: '/auth/signup',
  authForgotPassword: '/auth/forgot-password',
  authResetPassword: '/auth/reset-password',
  adminDashboard: '/admin/dashboard',
  adminSettings: '/admin/settings',
};

interface URLConfig {
  slug?: string;
  query?: Record<string, string | number | boolean>;
}

export const buildURL = (basePath: string, config?: URLConfig): string => {
  let url = basePath;

  if (config?.slug) {
    url = url.endsWith('/') ? url + config.slug : url + '/' + config.slug;
  }

  if (config?.query) {
    const params = new URLSearchParams();
    Object.entries(config.query).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        params.append(key, String(value));
      }
    });
    if (params.toString()) {
      url += '?' + params.toString();
    }
  }

  return url;
};

export const getHomeURL = (config?: URLConfig) => buildURL(ROUTES.home, config);
export const getDashboardURL = (config?: URLConfig) => buildURL(ROUTES.dashboard, config);
export const getProfileURL = (config?: URLConfig) => buildURL(ROUTES.profile, config);
export const getSettingsURL = (config?: URLConfig) => buildURL(ROUTES.settings, config);
export const getAuthSigninURL = (config?: URLConfig) => buildURL(ROUTES.authSignin, config);
export const getAuthSignupURL = (config?: URLConfig) => buildURL(ROUTES.authSignup, config);
export const getAuthForgotPasswordURL = (config?: URLConfig) =>
  buildURL(ROUTES.authForgotPassword, config);
export const getAuthResetPasswordURL = (config?: URLConfig) =>
  buildURL(ROUTES.authResetPassword, config);
export const getAdminDashboardURL = (config?: URLConfig) => buildURL(ROUTES.adminDashboard, config);
export const getAdminSettingsURL = (config?: URLConfig) => buildURL(ROUTES.adminSettings, config);
