export interface UserInterface {
  id: string;
  username: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserLoginInterface {
  username: string;
  password: string;
}
