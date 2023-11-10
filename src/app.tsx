import GlobalStyle from "./core/styles/global-styles.ts";
import { RouterProvider } from "react-router-dom";
import router from "./core/routing/routing.tsx";

// import { ReactComponent as AddIcon } from "./assets/add.svg?react";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
