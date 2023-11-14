import Header from "../components/header/header.js";
import Form from "../components/form/form.js";
import { PageHeading } from "../components/form/form.style.js";
import { Select } from "../components/form/dropdown.js";

const options = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
  { label: "Three", value: "3" },
  { label: "Four", value: "4" },
];

function EditUser() {
  return (
    <>
      <Header />
      <PageHeading>Edit employee</PageHeading>
      <Form formtype="edit-form"></Form>
      <Select options={options}></Select>
    </>
  );
}

export default EditUser;
