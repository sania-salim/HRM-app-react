import GlobalStyle from "./core/styles/global-styles.ts";
import Button from "./components/buttons/button.tsx";
import "./app.css";
import Table from "./components/table/table.tsx";
import Form from "./components/form/form.tsx";
import Popup from "./components/popup/popup.tsx";

// import { ReactComponent as AddIcon } from "./assets/add.svg?react";

function App() {
  return (
    <>
      <GlobalStyle />
      <Button
        buttontype="regularButton"
        buttontext="I'm a regular test button"
        buttonicon=""
      />
      <Button
        buttontype="deleteButton"
        buttontext="I'm a delete test button"
        buttonicon=""
      />
      <Button
        buttontype="iconButton"
        buttontext="I'm an icon test button"
        buttonicon="src/assets/add.svg"
      />

      <Table></Table>
      <Form></Form>
      <Popup></Popup>
    </>
  );
}

export default App;
