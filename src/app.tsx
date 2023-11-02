// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import GlobalStyle from "./core/styles/global-styles.ts";
import Button from "./components/buttons/buttons.style.ts";
import "./app.css";

import { ReactComponent as AddIcon } from "./assets/add.svg";

function App() {
  return (
    <>
      <GlobalStyle />
      <Button>I'm a regular test button</Button>
      <Button iconButton>
        <AddIcon />
        I'm a test button with icon
      </Button>
      <Button deleteButton>I'm a delete test button</Button>
    </>
  );
}

export default App;
