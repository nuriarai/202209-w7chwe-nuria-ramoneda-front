import RegisterFormStyled from "./RegisterFormStyled";

export interface RegisterFormData {
  username: string;
  password: string;
  email: string;
}

const RegisterForm = (): JSX.Element => {
  return (
    <>
      <h1>Create an account</h1>
      <RegisterFormStyled className="register">
        <div className="register__wrap-input">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div className="register__wrap-input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required minLength={8} />
        </div>
        <div className="register__wrap-input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="register__wrap-input">
          <label htmlFor="picture">Picture</label>
          <input type="file" id="picture" />
        </div>
        <button className="button button--register" type="submit">
          Register
        </button>
      </RegisterFormStyled>
    </>
  );
};

export default RegisterForm;
