export const ACCESS_TOKEN_KEY = 'access_token';
export const REFRESH_TOKEN_KEY = 'refresh_token';

const authStorageService = () => {
  return {
    setToken: (token?: string) => {
      if (token) {
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
      }
    },

    getToken: () => localStorage.getItem(ACCESS_TOKEN_KEY),

    removeToken: () => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    },

    setRefreshToken: (token: string) => {
      if (token) {
        localStorage.setItem(REFRESH_TOKEN_KEY, token);
      }
    },

    getRefreshToken: () => localStorage.getItem(REFRESH_TOKEN_KEY),

    removeRefreshToken: () => {
      localStorage.removeItem(REFRESH_TOKEN_KEY);
    },
  };
};

export default authStorageService;
