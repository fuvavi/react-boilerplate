import { ApiService } from '@/shared/services/api.service';
import authStorageService from '@/shared/services/authStorage.service';

const endpoint = 'auth';
const apiService = new ApiService();

export interface UserInputInterface {
  username: string;
  password: string;
}

// Register user
const registerUser = async (input: UserInputInterface) => {
  const data = await apiService.post(`${endpoint}/register`, input);
  const { accessToken } = data;
  authStorageService().setToken(accessToken);
  return data.user;
};

// Login user
const loginUser = async (input: UserInputInterface) => {
  const data = await apiService.post(`${endpoint}/login`, input);
  const { token, id, firstName, lastName, username, gender, image } = data;
  token && authStorageService().setToken(token);

  return {
    user: {
      id,
      firstName,
      lastName,
      username,
      gender,
      image,
    },
  };
};

// Logout user
const logout = () => {
  authStorageService().removeToken();
};

// Get user me
const getMe = async () => {
  const user = await apiService.get(`${endpoint}/me`);
  return user;
};

const userService = {
  registerUser,
  loginUser,
  logout,
  getMe,
};

export default userService;
