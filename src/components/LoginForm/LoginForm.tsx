import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserLoginData } from "../../types/types.js";
import useApi from "../../hooks/userApi";
import AccessFormStyled from "../StyledComponents/FormStyled";

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

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserLoginData = {
      username: formData.username,
      password: formData.password,
    };

    await userLoginApi(formDataToSubmit);
  };

  return (
    <>
      <AccessFormStyled
        className="access login"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="access__wrap-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            required
            onChange={handleFormChange}
          />
        </div>
        <div className="access__wrap-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            minLength={8}
            onChange={handleFormChange}
          />
        </div>
        <button className="button button--access button--login" type="submit">
          Login
        </button>
        <div className="access__wrap-link">
          <span>You don't have an account? </span>
          <Link
            className="access__link access__link--to-register"
            to="/register"
          >
            Register
          </Link>
        </div>
      </AccessFormStyled>
    </>
  );
};

export default LoginForm;
