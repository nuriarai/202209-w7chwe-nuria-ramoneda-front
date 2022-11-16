import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserRegisterData } from "../../types/types.js";
import useApi from "../../hooks/userApi";
import AccessFormStyled from "../StyledComponents/FormStyled";

const initialFormData = {
  username: "",
  password: "",
  email: "",
};

const RegisterForm = (): JSX.Element => {
  const { registerUserApi } = useApi();

  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserRegisterData = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };
    registerUserApi(formDataToSubmit);
  };

  return (
    <>
      <AccessFormStyled
        className="access register"
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
        <div className="access__wrap-input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required onChange={handleFormChange} />
        </div>
        <div className="access__wrap-input">
          <label htmlFor="picture">Picture</label>
          <input type="file" id="picture" />
        </div>
        <button
          className="button button--access button--register"
          type="submit"
        >
          Register
        </button>
        <div className="access__wrap-link">
          <span>Do you have an account? </span>
          <Link className="access__link access__link--to-login" to="/login">
            Login
          </Link>
        </div>
      </AccessFormStyled>
    </>
  );
};

export default RegisterForm;
