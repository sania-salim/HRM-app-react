import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import Regularbutton from "./components/buttons.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Regularbutton>I'm a test button!</Regularbutton>
  </React.StrictMode>
);
