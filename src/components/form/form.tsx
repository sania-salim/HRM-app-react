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
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Select, selectOptions } from "./dropdown.tsx";

import {
  // CustomSelect,
  // CustomSimpleSelect,
  designationSelected,
  locationOptionSelected,
  workOptionSelected,
} from "./custom-select.tsx";

import {
  employeeList,
  SkillOptions,
  WorkOptions,
  LocationOptions,
  DesignationOptions,
} from "../../core/config/constants.ts";
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
  const navigate = useNavigate();
  let initialvalues;

  const [valueSingleWork, setValueSingleWork] = useState<
    selectOptions | undefined
  >(WorkOptions[0]);

  const [valueSingleDesignation, setValueSingleDesignation] = useState<
    selectOptions | undefined
  >(DesignationOptions[0]);

  const [valueSingleLocation, setValueSingleLocationS] = useState<
    selectOptions | undefined
  >(LocationOptions[0]);

  const [valueMultipleSkill, setValueMultipleSkill] = useState<selectOptions[]>(
    [SkillOptions[0]]
  );

  if (formtype === editForm) {
    console.log("we are not doomed");

    initialvalues = {
      fullName: employeeList[0].name,
      dateOfJoining: employeeList[0].dateOfJoining,
      dateOfBirth: employeeList[0].dateOfBirth,
      mailID: employeeList[0].mailID,
      phoneNumber: employeeList[0].phoneNumber,
      skills: employeeList[0].skills,
      workStatus: employeeList[0].workStatus,
    };

    console.log(initialvalues);
  } else {
    initialvalues = {
      fullName: "",
      dateOfJoining: "",
      dateOfBirth: "",
      mailID: "",
      phoneNumber: "",
      skills: [],
      workStatus: "",
    };
  }
  const formik = useFormik({
    initialValues: initialvalues,

    onSubmit: (values) => {
      // object to push upon submission
      const newEntry = {
        id: 1006,
        name: values.fullName,
        designation: designationSelected,
        mailID: values.mailID,
        skills: selectedSkills,
        workStatus: workOptionSelected,
        location: locationOptionSelected,
      };

      if (formtype === addForm) {
        // employeeList.push(newEntry);
      } else if (formtype === editForm) {
        // deleteEmployee(newEntry.id);
        // employeeList.push(newEntry);
      }
      console.log(newEntry);
      console.log(employeeList);

      //go to home

      navigate("/");
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
              {/* <CustomSelect></CustomSelect> */}
              {/* Skills dropdown - multi-select */}
              <LabelForm>Select skills</LabelForm>
              <Select
                multiple
                options={SkillOptions}
                value={valueMultipleSkill}
                onChange={(o) => setValueMultipleSkill(o)}
              ></Select>
            </FormFieldDivider>

            <FormFieldDivider>
              {/* <CustomSimpleSelect selectList="designation"></CustomSimpleSelect> */}
              <LabelForm>Select designation</LabelForm>
              <Select
                options={DesignationOptions}
                value={valueSingleDesignation}
                onChange={(o) => setValueSingleDesignation(o)}
              ></Select>
            </FormFieldDivider>
          </FormDivider>
          <FormDivider>
            <FormFieldDivider>
              {/* <CustomSimpleSelect selectList="workOptions"></CustomSimpleSelect> */}
              <LabelForm>Select mode of work</LabelForm>
              <Select
                options={WorkOptions}
                value={valueSingleWork}
                onChange={(o) => setValueSingleWork(o)}
              ></Select>
            </FormFieldDivider>

            <FormFieldDivider>
              {/* <CustomSimpleSelect selectList="workLocation"></CustomSimpleSelect> */}
              <LabelForm>Select reporting location</LabelForm>
              <Select
                options={LocationOptions}
                value={valueSingleLocation}
                onChange={(o) => setValueSingleLocationS(o)}
              ></Select>
            </FormFieldDivider>
          </FormDivider>
        </InnerFormContainer>
      </OuterFormContainer>
      <ButtonContainer>
        <Link to="/">
          <Button buttontype="regularButton" buttontext="Cancel" />
        </Link>
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
