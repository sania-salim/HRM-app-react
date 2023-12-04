import GlobalStyle from "./core/styles/global-styles.ts";
import { RouterProvider } from "react-router-dom";
import router from "./core/routing/routing.tsx";
import { MyProvider } from "./context/mycontext.tsx";

// import { ReactComponent as AddIcon } from "./assets/add.svg?react";

function App() {
  return (
    <>
      <GlobalStyle />
      <MyProvider>
        <RouterProvider router={router} />
      </MyProvider>
    </>
  );
}

export default App;
