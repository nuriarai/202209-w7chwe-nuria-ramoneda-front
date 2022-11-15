import { useCallback } from "react";
import { useAppDispatch } from "../redux/hooks";
import { UserRegisterData } from "../types/types.js";
import { registerUserActionCreator } from "../redux/features/userSlice/userSlice";

const useApi = () => {
  const dispatch = useAppDispatch();

  const registerUserApi = useCallback(
    async (user: UserRegisterData) => {
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

        const newUser = await response.json();
      } catch (error: unknown) {
        throw new Error(`There was an error: ${(error as Error).message}`);
      }
    },

    [dispatch]
  );

  return {
    registerUserApi,
  };
};

export default useApi;
