export const ACCESS_TOKEN_KEY = 'access_token';

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
  };
};

export default authStorageService;
