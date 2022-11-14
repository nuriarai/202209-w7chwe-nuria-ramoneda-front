import styled from "styled-components";

const RegisterFormStyled = styled.form`
  &.register {
    max-width: 400px;
    margin: 0 auto;
  }
  label {
    display: block;
    padding-bottom: 5px;
  }
  .register__wrap-input {
    margin-bottom: 15px;
  }

  button {
    border: 1px solid darkgoldenrod;
    background-color: darkgoldenrod;
    color: white;
    min-width: 200px;
    padding: 10px;
    border-radius: 10px;
    margin: 30px auto 0;
    text-align: center;
    font-size: 1rem;
    display: block;
    &:hover,
    &:focus {
      background-color: chocolate;
    }
  }
  input {
    width: 100%;
    border: 1px solid #666;
    padding: 10px;
    border-radius: 5px;
  }
`;

export default RegisterFormStyled;
