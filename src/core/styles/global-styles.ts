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

  body{
    margin:0;
    font-family:"inter" ;
  }
  
  .ProfilePhoto {
    height: 280px;
    width: 200px;
    margin-top: 19px;
  }
  
  .isSelected{
    background-color: var(--selection);
  }
  

  //////////////////////////////////////////////////////////////
  .container{
    position:relative;
    width:20em;
    min-height:1.5em;
    border:0.05em #777;
    display:flex;
    gap:0.5em;
    padding:0.5em;
    border-radius:0.5em;
    outline:none;
  }

  .container:focus {
    border-color: hsl(200,100%,50%);
  }

  .value{
    flex-grow:1;
  }
`;

export default GlobalStyle;
