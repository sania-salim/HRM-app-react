import Header from "../components/header/header.js";
import Form from "../components/form/form.js";
import { PageHeading } from "../components/form/form.style.js";

function AddUser() {
  return (
    <>
      <Header />
      <PageHeading>Add new employee</PageHeading>
      <Form formtype="add-form"></Form>
    </>
  );
}

export default AddUser;
