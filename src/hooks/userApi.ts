import { useCallback } from "react";
import { UserRegisterData } from "../types/types.js";

const useApi = () => {
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
      } catch (error: unknown) {
        throw new Error(`There was an error: ${(error as Error).message}`);
      }
    },

    []
  );

  return {
    registerUserApi,
  };
};

export default useApi;
