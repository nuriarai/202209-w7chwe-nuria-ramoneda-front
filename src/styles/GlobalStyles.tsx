import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto-condensed";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: "Roboto Condensed", "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyles;
