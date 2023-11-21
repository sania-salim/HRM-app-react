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
import { formContent } from "../../core/config/content.ts";
import { Confirm } from "../confirmation/confirm.tsx";

import { Select, selectOptions } from "./dropdown.tsx";

import {
  employeeList,
  SkillOptions,
  WorkOptions,
  LocationOptions,
  DesignationOptions,
} from "../../core/config/constants.ts";
// import Popup from "../popup/popup.tsx";
import { useMyContext } from "../../context/mycontext.tsx";

import { useFormik } from "formik";
import * as Yup from "yup";

// import { selectedSkills } from "./custom-select.tsx";

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
  const { updateData } = useMyContext();
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);

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

  //employee delete function

  function deleteEmployee(fetchID: number) {
    // const updatedEmployeeList = employeeList.filter(
    //   (employee) => employee.id !== fetchID
    // );

    const EmpIndex = employeeList.findIndex(
      (employee) => employee.id === fetchID
    );

    if (EmpIndex != -1) {
      employeeList.splice(EmpIndex, 1);
    }

    setOpenConfirm(true);
  }

  if (formtype === editForm) {
    console.log("we are not doomed");

    const currentURL = window.location.href;
    const url = new URL(currentURL);
    const path = url.pathname;
    const segments = path.split("/");
    const fetchID = Number(segments[segments.length - 1]);

    initialvalues = {
      fullName: employeeList[fetchID].name,
      dateOfJoining: employeeList[fetchID].dateOfJoining,
      dateOfBirth: employeeList[fetchID].dateOfBirth,
      mailID: employeeList[fetchID].mailID,
      phoneNumber: employeeList[fetchID].phoneNumber,
      skills: employeeList[fetchID].skills,
      workStatus: employeeList[fetchID].workStatus,
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
        mailID: values.mailID,
        designation: valueSingleDesignation?.label,
        skills: valueMultipleSkill,
        workStatus: valueSingleWork?.label,
        location: valueSingleLocation?.label,
      };

      if (formtype === addForm) {
        // employeeList.push(newEntry);

        updateData({ name: newEntry.name, message: "has been added" });
        navigate("/");
      } else if (formtype === editForm) {
        // deleteEmployee(newEntry.id);
        // employeeList.push(newEntry);
        //popup
        updateData({ name: newEntry.name, message: "has been edited" });
        navigate("/");
      }
    },

    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <OuterFormContainer>
        {openConfirm ? (
          <Confirm
            confirm={openConfirm}
            name={formik.values.fullName}
          ></Confirm>
        ) : (
          ""
        )}

        <img
          src="../../src/assets/Profile photo.png"
          alt="placeholder/profile image"
          className="ProfilePhoto"
        />
        <InnerFormContainer>
          <h3>{formContent.formHeading}</h3>
          <FormFieldDivider>
            <LabelForm>{formContent.fullNameLabel}</LabelForm>
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
              <LabelForm>{formContent.dateOfJoiningLabel}</LabelForm>
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
              <LabelForm>{formContent.dateOfBirthLabel}</LabelForm>
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

          <h3>{formContent.contactHeading}</h3>
          <FormDivider>
            <FormFieldDivider>
              <LabelForm>{formContent.phoneNumberLabel}</LabelForm>
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
              <LabelForm>{formContent.mailIdLabel}</LabelForm>
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

          <h3>{formContent.employmentDetailsHeading}</h3>
          <FormDivider>
            <FormFieldDivider>
              {/* <CustomSelect></CustomSelect> */}
              {/* Skills dropdown - multi-select */}
              <LabelForm>{formContent.skillSelectLabel}</LabelForm>
              <Select
                multiple
                options={SkillOptions}
                value={valueMultipleSkill}
                onChange={(o) => setValueMultipleSkill(o)}
              ></Select>
            </FormFieldDivider>

            <FormFieldDivider>
              {/* <CustomSimpleSelect selectList="designation"></CustomSimpleSelect> */}
              <LabelForm>{formContent.designationLabel}</LabelForm>
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
              <LabelForm>{formContent.modeOfWorkLabel}</LabelForm>
              <Select
                options={WorkOptions}
                value={valueSingleWork}
                onChange={(o) => setValueSingleWork(o)}
              ></Select>
            </FormFieldDivider>

            <FormFieldDivider>
              {/* <CustomSimpleSelect selectList="workLocation"></CustomSimpleSelect> */}
              <LabelForm>{formContent.selectLocationLabel}</LabelForm>
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
        {formtype === editForm ? (
          <Button
            buttontype="deleteButton"
            buttontext="Delete"
            buttonicon=""
            onSmash={() => deleteEmployee(2)}
          />
        ) : (
          ""
        )}

        <Button buttontype="regularButton" buttontext="Done" type="submit" />
      </ButtonContainer>
    </form>
  );
};

export default Form;
