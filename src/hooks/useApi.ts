import { useCallback } from "react";
import { useAppDispatch } from "../app/hooks";
import { User } from "../redux/features/types";
import { registerUserActionCreator } from "../redux/features/usersSlice";

const { API_LLAMBORDAIRES: url_api_llambordaires } = process.env;

const useApi = () => {
  const dispatch = useAppDispatch();

  const registerUserApi = useCallback(
    async (user: User) => {
      try {
        const response = await fetch(
          `${url_api_llambordaires}/users/register`,
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

        dispatch(registerUserActionCreator(newUser));
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
