import {
  LabelForm,
  InputFullStyled,
  InputHalfStyled,
  FormDivider,
  FormFieldDivider,
  InnerFormContainer,
  OuterFormContainer,
  ValidationError,
  ButtonContainer,
} from "./form.style.ts";
import Button from "../buttons/button.tsx";

import CustomSelect from "./custom-select.tsx";
import { employeeList } from "../../core/config/constants.ts";
import { useFormik } from "formik";
import * as Yup from "yup";

import { selectedSkills } from "./custom-select.tsx";

const addForm = "add-form";
const editForm = "edit-form";

const validationSchema = Yup.object({
  fullName: Yup.string().max(50, "Too Long!").required("Required field"),
  dateOfJoining: Yup.string().required("Required field"),
  dateOfBirth: Yup.string().required("Required field"),
  mailID: Yup.string().email().required("Required field"),
  phoneNumber: Yup.number().required("Required field"),
});

interface FormProps {
  formtype: "add-form" | "edit-form";
}

const Form: React.FC<FormProps> = ({ formtype }: FormProps) => {
  const formik = useFormik({
    initialValues: {
      fullName: "Julie",
      dateOfJoining: "",
      dateOfBirth: "",
      mailID: "julie@mail.com",
      phoneNumber: "",
      skills: [],
    },

    onSubmit: (values) => {
      // object to push upon submission
      const newEntry = {
        id: 1006,
        name: values.fullName,
        designation: " Intern at watchdog timing",
        mailID: values.mailID,
        skills: selectedSkills,
      };

      if (formtype === addForm) {
        employeeList.push(newEntry);
      } else if (formtype === editForm) {
        // deleteEmployee(newEntry.id);
        employeeList.push(newEntry);
      }

      console.log(employeeList);
    },

    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <OuterFormContainer>
        <img
          src="src/assets/Profile photo.png"
          alt="placeholder/profile image"
          className="ProfilePhoto"
        />
        <InnerFormContainer>
          <h3>Employee ID: 1001</h3>
          <FormFieldDivider>
            <LabelForm>Full Name</LabelForm>
            <InputFullStyled
              type="text"
              id="fullName"
              name="fullName"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            ></InputFullStyled>
            {formik.errors.fullName ? (
              <ValidationError>{formik.errors.fullName}</ValidationError>
            ) : null}
          </FormFieldDivider>

          <FormDivider>
            <FormFieldDivider>
              <LabelForm>Date of joining</LabelForm>
              <InputHalfStyled
                type="date"
                id="dateOfJoining"
                name="dateOfJoining"
                onChange={formik.handleChange}
                value={formik.values.dateOfJoining}
              ></InputHalfStyled>
              {formik.errors.dateOfJoining ? (
                <ValidationError>{formik.errors.dateOfJoining}</ValidationError>
              ) : null}
            </FormFieldDivider>

            <FormFieldDivider>
              <LabelForm>Date of birth</LabelForm>
              <InputHalfStyled
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                onChange={formik.handleChange}
                value={formik.values.dateOfBirth}
              ></InputHalfStyled>
              {formik.errors.dateOfBirth ? (
                <ValidationError>{formik.errors.dateOfBirth}</ValidationError>
              ) : null}
            </FormFieldDivider>
          </FormDivider>

          <h3>Contact details</h3>
          <FormDivider>
            <FormFieldDivider>
              <LabelForm>Phone number</LabelForm>
              <InputHalfStyled
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              ></InputHalfStyled>
              {formik.errors.phoneNumber ? (
                <ValidationError>{formik.errors.phoneNumber}</ValidationError>
              ) : null}
            </FormFieldDivider>

            <FormFieldDivider>
              <LabelForm>Mail ID</LabelForm>
              <InputHalfStyled
                type="email"
                id="mailID"
                name="mailID"
                onChange={formik.handleChange}
                value={formik.values.mailID}
              ></InputHalfStyled>
              {formik.errors.mailID ? (
                <ValidationError>{formik.errors.mailID}</ValidationError>
              ) : null}
            </FormFieldDivider>
          </FormDivider>

          <h3>Employment details</h3>
          <FormDivider>
            <FormFieldDivider>
              <CustomSelect></CustomSelect>
            </FormFieldDivider>

            <FormFieldDivider>
              <CustomSelect></CustomSelect>
            </FormFieldDivider>
          </FormDivider>
          <FormDivider>
            <FormFieldDivider>
              <CustomSelect></CustomSelect>
            </FormFieldDivider>

            <FormFieldDivider>
              <CustomSelect></CustomSelect>
            </FormFieldDivider>
          </FormDivider>
        </InnerFormContainer>
      </OuterFormContainer>
      <ButtonContainer>
        <Button buttontype="regularButton" buttontext="Cancel" />
        {formtype && editForm ? (
          <Button buttontype="deleteButton" buttontext="Delete" buttonicon="" />
        ) : (
          ""
        )}
        <Button buttontype="regularButton" buttontext="Done" type="submit" />
      </ButtonContainer>
    </form>
  );
};

export default Form;
