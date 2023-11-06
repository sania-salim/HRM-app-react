import Header from "../components/header/header.js";
import Form from "../components/form/form.js";
import Button from "../components/buttons/button.js";
import { ButtonContainer, PageHeading } from "../components/form/form.style.js";

function AddUser() {
  return (
    <>
      <Header />
      <PageHeading>Add new employee</PageHeading>
      <Form></Form>
      <ButtonContainer>
        <Button buttontype="regularButton" buttontext="Cancel" buttonicon="" />
        <Button buttontype="regularButton" buttontext="Done" buttonicon="" />
      </ButtonContainer>
    </>
  );
}

export default AddUser;
