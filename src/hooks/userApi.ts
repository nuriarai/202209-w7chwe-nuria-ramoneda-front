import { useCallback } from "react";
import { loginUserActionCreator } from "../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../redux/hooks";
import {
  JwtPayloadCustom,
  UserLoginData,
  UserRegisterData,
} from "../types/types.js";
import decodeToken from "../utils/decodeToken";

const useApi = () => {
  const dispatch = useAppDispatch();

  const registerUserApi = useCallback(async (user: UserRegisterData) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/users/register`,
        {
          method: "POST",
          body: JSON.stringify({
            username: user.username,
            password: user.password,
            email: user.email,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!response.ok) {
        throw new Error();
      }
    } catch (error: unknown) {
      throw new Error(`There was an error: ${(error as Error).message}`);
    }
  }, []);

  const userLoginApi = async (user: UserLoginData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/users/login`, {
        method: "POST",
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const { token } = await response.json();

      const userLogged: JwtPayloadCustom = decodeToken(token);
      dispatch(
        loginUserActionCreator({
          ...userLogged,
          token,
        })
      );

      localStorage.setItem("token", token);
    } catch (error: unknown) {
      throw new Error(`There was an error: ${(error as Error).message}`);
    }
  };

  return {
    registerUserApi,
    userLoginApi,
  };
};

export default useApi;
