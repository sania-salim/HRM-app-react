import Header from "../components/header/header.js";
import Form from "../components/form/form.js";
import { PageHeading } from "../components/form/form.style.js";
import Popup from "../components/popup/popup.js";

function EditUser() {
  return (
    <>
      <Header />
      <PageHeading>Edit employee</PageHeading>
      <Form formtype="edit-form"></Form>
      <Popup actionType="edited" name="Tom"></Popup>
    </>
  );
}

export default EditUser;
