import Header from "../components/header/header.js";
import Form from "../components/form/form.js";
import { PageHeading } from "../components/form/form.style.js";
import { addUserContent } from "../core/config/content.js";

function AddUser() {
  return (
    <>
      <Header />
      <PageHeading>{addUserContent.pageHeading}</PageHeading>
      <Form formtype="add-form"></Form>
    </>
  );
}

export default AddUser;
