import authStorageService from '@/shared/services/authStorage.service';

export const isAuthenticated = (): boolean => {
  return !!authStorageService().getToken();
};
