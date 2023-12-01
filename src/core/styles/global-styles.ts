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
* {
  font-family:"inter" ;
  }

  a{
    text-decoration:none;
  }

  body{
    margin:0;
  }
  
  .ProfilePhoto {
    height: 280px;
    width: 200px;
    margin-top: 19px;
  }
  
  .isSelected{
    background-color: var(--selection);
  }
  
  .selectedPage{
    color:white;
    background-color: var(--primaryDark);
    border: 2px solid var(--primaryDark);
  }

  //////////////////////////////////////////////////////////////
  .skills{
    display:none;
  }

  .skills.show{
    display: block;
  }
  
  .container{
    position:relative;
    width:230px;
    min-height: 1em;
    border:0.05em solid #777;
    display:flex;
    gap:0.5em;
    padding:0.5em;
    border-radius: 0.15em;
    outline:none;
  }

  .container:focus {
    border-color: var(--selection);
  }

  .value{
    flex-grow:1;
    display: flex;
    gap: 0.5em;
    flex-wrap:wrap;
    max-height: 4em;
    overflow-y:auto;
  }

  .clearbutton{
    background:none;
    color: #777;;
    border:none;
    outline:none;
    padding:0;
    cursor:pointer;
    font-size:1.2em;
  }

  .clearbutton:focus,
  .clearbutton:hover{
    color:#333;
  }

  .divider{
    background-color:#777;
    align-self:stretch;
    width:0.05em;
  }

  .caret{
    translate: 0 50%;
    border:0.25em solid transparent;
    border-top-color:#777;
  }

  .options{
    position:absolute;
    margin:0;
    padding:0;
    list-style:none;
    display:none;
    max-height:10em;
    overflow-y:auto;
    border:0.05em solid var(--selection);;
    border-radius: 0.25em;
    width:100%;
    left:0;
    top: calc(100% + 00.01em);
    background-color:white;
    z-index:100;
  }

  .options.show{
    display:block;
  }

  .option{
    padding: 0.25em 0.5em;
    cursor: pointer;
  }

  .option:hover{
    background-color: var(--selection);
  }

  .option.highlighted{
    color: white;
    background-color: var(--primaryDark);
    /* background-color: hsl(200,100%,50%); */
  }

  .option.selected{
    color: white;
    background-color: var(--primaryDark);
    /* background-color: hsl(200,100%,70%); */
  }

  .skillchipcontainer{
    display:flex;
    flex-wrap:wrap;
    flex:0;
    justify-items:center;
    align-items: flex-end;
    justify-content: center;
  }

  .skillchip{
    text-align:center;
    align-self:right;
    display: flex;
    max-height:min-content;
    max-width:fit-content;
    font-size:0.7em;
    background-color:var(--themeGrey);
    border-radius:8px;
    padding: 1px 4px ;

  }
`;

export default GlobalStyle;
