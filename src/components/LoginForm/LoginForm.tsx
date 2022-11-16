import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserLoginData } from "../../types/types.js";
import useApi from "../../hooks/userApi";
import LoginFormStyled from "./LoginFormStyled.js";

const initialFormData = {
  username: "",
  password: "",
  email: "",
};

const LoginForm = (): JSX.Element => {
  const { userLoginApi } = useApi();

  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserLoginData = {
      username: formData.username,
      password: formData.password,
    };

    userLoginApi(formDataToSubmit);
  };

  return (
    <>
      <h1>Login to Llambordaires</h1>
      <LoginFormStyled
        className="register"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="register__wrap-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            required
            onChange={handleFormChange}
          />
        </div>
        <div className="register__wrap-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            minLength={8}
            onChange={handleFormChange}
          />
        </div>
        <button className="button button--register" type="submit">
          Login
        </button>

        <Link className="login__link" to="/register">
          Register
        </Link>
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
