import Header from "../components/header/header.js";
import Form from "../components/form/form.js";
import { PageHeading } from "../components/form/form.style.js";
import { Select } from "../components/form/dropdown.js";
import { useState } from "react";

const options = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
  { label: "Three", value: "3" },
  { label: "Four", value: "4" },
];

function EditUser() {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );
  return (
    <>
      <Header />
      <PageHeading>Edit employee</PageHeading>
      <Form formtype="edit-form"></Form>
      <Select
        options={options}
        value={value}
        onChange={(o) => setValue(o)}
      ></Select>
    </>
  );
}

export default EditUser;
