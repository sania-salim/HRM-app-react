import GlobalStyle from "./core/styles/global-styles.ts";
import Home from "./home/home.tsx";

// import { ReactComponent as AddIcon } from "./assets/add.svg?react";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home></Home>
    </>
  );
}

export default App;
