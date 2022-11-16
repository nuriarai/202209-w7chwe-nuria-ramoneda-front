import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto-condensed";

const GlobalStyles = createGlobalStyle`
  *,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
}

body {
  line-height: 1.5;
  font-family: "Roboto Condensed", "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}



h1,
h2,
h3 {
  margin-top: 0;
}

h1 {
  text-align: center;
}

.container {
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

body {
  background-color: lavender;
}

`;

export default GlobalStyles;
