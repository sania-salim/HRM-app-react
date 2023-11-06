import GlobalStyle from "./core/styles/global-styles.ts";
import AddUser from "./add user/add-user.tsx";

// import { ReactComponent as AddIcon } from "./assets/add.svg?react";

function App() {
  return (
    <>
      <GlobalStyle />
      <AddUser></AddUser>
    </>
  );
}

export default App;

{
  /*
import Button from "./components/buttons/button.tsx";
import "./app.css";
import Form from "./components/form/form.tsx";
import Popup from "./components/popup/popup.tsx";
  
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
<Form></Form>
<Popup></Popup> */
}
