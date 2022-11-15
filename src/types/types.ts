export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  picture: string;
}

export interface UserStateLogin extends User {
  isLogged: boolean;
}

export interface UserRegisterData {
  username: string;
  password: string;
  email: string;
}

export interface UserLoginData {
  username: string;
  password: string;
}

export interface LoginUserData {
  username: string;
  token: string;
  id: string;
}

export interface JwtPayloadCustom {
  id: string;
  username: string;
}
