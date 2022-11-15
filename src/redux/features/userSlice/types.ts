export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  picture: string;
}

export interface UserStateRegister extends User {
  isLogged: boolean;
}
