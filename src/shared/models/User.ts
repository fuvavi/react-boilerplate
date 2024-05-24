export interface UserInterface {
  id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  image?: string;
}

export interface UserLoginInterface {
  username: string;
  password: string;
}
