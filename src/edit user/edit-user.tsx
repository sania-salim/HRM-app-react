import Header from "../components/header/header.js";
import Form from "../components/form/form.js";
import { PageHeading } from "../components/form/form.style.js";
import { editUserContent } from "../core/config/content.js";

function EditUser() {
  return (
    <>
      <Header />
      <PageHeading>{editUserContent.pageHeading}</PageHeading>
      <Form formtype="edit-form"></Form>
    </>
  );
}

export default EditUser;
