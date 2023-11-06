import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --primaryDark: rgb(41, 93, 189);
    --primaryLight: rgb(191, 212, 252);
    --selection: rgb(168, 186, 219);
    --accent: #ff9a03;
    --themeWhite: #f5f5f5;
    --themeBlack: #111111;
    --themeGrey: #d9d9d9;
    --themeRed: #ff0000;
    --themeGreen: #5faf5e;
  }
  
  .ProfilePhoto {
    height: 360px;
    width: 280px;
  }
  
`;

export default GlobalStyle;
