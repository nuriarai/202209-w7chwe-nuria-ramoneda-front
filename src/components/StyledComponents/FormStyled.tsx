import styled from "styled-components";
import mainTheme from "../../styles/mainTeme";

const AccessFormStyled = styled.form`
  &.access {
    max-width: 350px;
    margin: 30px auto;
  }

  label {
    display: block;
    padding-bottom: 5px;
  }
  .access__wrap-input {
    margin-bottom: 15px;
  }

  .access__wrap-link {
    margin-top: 30px;
    text-align: center;
  }

  button {
    border: 1px solid ${mainTheme.colors.mainColor};
    background-color: ${mainTheme.colors.mainColor};
    color: #fff;
    min-width: 200px;
    padding: 10px;
    border-radius: 10px;
    margin: 30px auto 0;
    text-align: center;
    font-size: 1rem;
    display: block;
    &:hover,
    &:focus {
      border-color: #000;
      background-color: #000;
    }
  }
  input {
    width: 100%;
    border: 1px solid ${mainTheme.colors.softGray};
    padding: 15px;
    border-radius: 5px;
  }
`;

export default AccessFormStyled;
