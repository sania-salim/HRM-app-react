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
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formContent } from "../../core/config/content.ts";
import { Confirm } from "../confirmation/confirm.tsx";
import { postData } from "../../core/api/api.ts";

import { Select, selectOptions } from "./dropdown.tsx";

import {
  employeeList,
  WorkOptions,
  LocationOptions,
  DesignationOptions,
} from "../../core/config/constants.ts";

// import Popup from "../popup/popup.tsx";
import { useMyContext } from "../../context/mycontext.tsx";
import { iEmployee } from "../table/table.tsx";
import { getData } from "../../core/api/api.ts";

import { useFormik } from "formik";
import * as Yup from "yup";

// import { selectedSkills } from "./custom-select.tsx";

const addForm = "add-form";
const editForm = "edit-form";
export let SkillOptions: Array<selectOptions> = [];

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

// interface in client side format
export interface myObj {
  fullName: string | undefined;
  dateOfJoining: string | undefined;
  dateOfBirth: string | undefined;
  mailID: string | undefined;
  phoneNumber: string | undefined;
  skills?: Array<{}> | undefined;
  // workStatus: emp.workStatus,
}

const Form: React.FC<FormProps> = ({ formtype }: FormProps) => {
  const navigate = useNavigate();
  const { updateData } = useMyContext();
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [emp, setEmp] = useState<iEmployee>();

  const [initialvalues, setInitialvalues] = useState<myObj>({
    fullName: "",
    dateOfJoining: "",
    dateOfBirth: "",
    mailID: "",
    phoneNumber: "",
    skills: [],
    // workStatus: "",
  });

  let fetchID = 0;
  // let emp: iEmployee;

  useEffect(() => {
    getEmployee(fetchID);
  }, []);

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

  // fetching options for skill dropdown
  useEffect(() => {
    getData(`/skills`).then((skillObj) => {
      let temp = skillObj.data.data;
      SkillOptions = temp.map(
        ({ skill, id }: { skill: string; id: number }) => ({
          label: skill,
          value: id,
        })
      );

      console.log("skillopts", SkillOptions);
    });
  }, []);

  //get employee to fill in edit form
  function getEmployee(fetchID: number) {
    console.log("im inside fetch employee function in edit form");

    getData(`/employee/${fetchID}`)
      .then((response) => {
        let temp = response.data.data;
        setEmp(temp);
        console.log("Emp is here", emp);
        console.log("response", response);
      })
      .catch((err) => {
        console.log("error in getting table:", err);
      });
  }

  //employee delete function

  function deleteEmployee(fetchID: number) {
    // const EmpIndex = employeeList.findIndex(
    //   (employee) => employee.id === fetchID
    // );

    // if (EmpIndex != -1) {
    //   employeeList.splice(EmpIndex, 1);
    // }

    setOpenConfirm(true);
  }

  useEffect(() => {
    console.log("inside use effect to set initial value");

    if (formtype === editForm) {
      console.log("we are not doomed");

      const currentURL = window.location.href;
      const url = new URL(currentURL);
      const path = url.pathname;
      const segments = path.split("/");
      fetchID = Number(segments[segments.length - 1]);

      setInitialvalues({
        fullName: emp?.firstName,
        dateOfJoining: emp?.dateOfJoining,
        dateOfBirth: emp?.dob,
        mailID: emp?.email,
        phoneNumber: "83475692374",
        skills: emp?.skills,
        // workStatus: emp.workStatus,
      });

      console.log("Thank god initialvals:", initialvalues);
    }
  }, [formtype, emp]);

  const formik = useFormik<myObj>({
    initialValues: initialvalues,

    onSubmit: (values) => {
      // object to push upon submission
      const newEntry = {
        firstName: values.fullName,
        email: values.mailID,
        designation: valueSingleDesignation?.label,
        dob: values.dateOfBirth,
        dateOfJoining: values.dateOfJoining,
        department: 4,
        // skills: valueMultipleSkill,
        // workStatus: valueSingleWork?.label,
        // location: valueSingleLocation?.label,
      };

      if (formtype === addForm) {
        // employeeList.push(newEntry);
        postData("/employee", newEntry)
          .then((res) => {
            console.log("done", res);
          })
          .catch((err) => {
            console.log("error in posting new employee", err);
          });
        console.log("im in add form submission");
        updateData({ name: newEntry.firstName, message: "has been added" });
        navigate("/");
      } else if (formtype === editForm) {
        // deleteEmployee(newEntry.id);
        // employeeList.push(newEntry);
        //popup
        postData("/employee", newEntry);
        // updateData({ name: newEntry.name, message: "has been edited" });
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
