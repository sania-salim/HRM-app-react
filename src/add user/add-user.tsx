import Header from "../components/header/header.js";
import Form from "../components/form/form.js";
import Button from "../components/buttons/button.js";
import { ButtonContainer } from "../components/form/form.style.js";

function AddUser() {
  return (
    <>
      <Header />
      <h2>Add new employee</h2>
      <Form></Form>
      <ButtonContainer>
        <Button buttontype="regularButton" buttontext="Cancel" buttonicon="" />
        <Button buttontype="regularButton" buttontext="Done" buttonicon="" />
      </ButtonContainer>
    </>
  );
}

export default AddUser;
