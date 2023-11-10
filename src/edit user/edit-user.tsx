import Header from "../components/header/header.js";
import Form from "../components/form/form.js";
import { PageHeading } from "../components/form/form.style.js";

function EditUser() {
  return (
    <>
      <Header />
      <PageHeading>Edit employee</PageHeading>
      <Form formtype="add-form"></Form>
    </>
  );
}

export default EditUser;
