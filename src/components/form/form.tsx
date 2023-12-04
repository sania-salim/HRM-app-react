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
  ProfilePhotoInput,
} from "./form.style.ts";

import Button from "../buttons/button.tsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formContent } from "../../core/config/content.ts";
import { Confirm } from "../confirmation/confirm.tsx";
import { postData, getData, editData } from "../../core/api/api.ts";
import { Select, selectOptions } from "./dropdown.tsx";
import {
  WorkOptions,
  LocationOptions,
  DesignationOptions,
} from "../../core/config/constants.ts";

import { useMyContext } from "../../context/mycontext.tsx";
import { empData } from "../../context/mycontext.tsx";
import { moreDetails } from "../../details/details.tsx";

import { useFormik } from "formik";
import * as Yup from "yup";
import placeHolderImage from "../../assets/profile placeholder.png";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../core/firebase.tsx";

import { skillQuery, addEmployeeQuery } from "../../core/config/constants.ts";

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
  dateOfJoining?: string | undefined;
  dateOfBirth?: string | undefined;
  mailID: string | undefined;
  phoneNumber?: string | undefined;
  skills?: Array<{}> | undefined;
  moreDetails?: string | undefined;
}

const Form: React.FC<FormProps> = ({ formtype }: FormProps) => {
  const { updateData } = useMyContext();
  const [emp, setEmp] = useState<empData>();
  const [photo, setPhoto] = useState<string | undefined>();
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const navigate = useNavigate();

  const [initialvalues, setInitialvalues] = useState<myObj>({
    fullName: "",
    dateOfJoining: "",
    dateOfBirth: "",
    mailID: "",
    phoneNumber: "",
    skills: [],
  });

  const [fetchID, setFetchID] = useState(0);

  let extraFields: moreDetails = { location: "", photoId: "" };

  const [valueSingleWork, setValueSingleWork] = useState<
    selectOptions | undefined
  >(WorkOptions[0]);

  const [valueSingleDesignation, setValueSingleDesignation] = useState<
    selectOptions | undefined
  >(DesignationOptions[0]);

  const [valueSingleLocation, setValueSingleLocation] = useState<
    selectOptions | undefined
  >(LocationOptions[0]);

  const [valueMultipleSkill, setValueMultipleSkill] = useState<selectOptions[]>(
    [SkillOptions[0]]
  );

  // fetching options for skill dropdown
  useEffect(() => {
    getData(skillQuery).then((skillObj) => {
      let temp = skillObj.data.data;
      SkillOptions = temp.map(
        ({ skill, id }: { skill: string; id: number }) => ({
          label: skill,
          value: id,
        })
      );
    });
  }, []);

  //get employee to fill in edit form
  function getEmployee(fetchID: number) {
    getData(`/employee/${fetchID}`)
      .then((response) => {
        let temp = response.data.data;

        setEmp(temp);
        setInitialvalues({
          fullName: temp?.firstName,
          dateOfJoining: temp?.dateOfJoining,
          dateOfBirth: temp?.dob,
          mailID: temp?.email,
          phoneNumber: temp.phone,
          skills: temp?.skills,
        });

        setValueMultipleSkill(
          temp?.skills.map((skill: { id: number; skill: string }) => ({
            label: skill.skill,
            value: skill.id,
          }))
        );

        const extra = JSON.parse(temp.moreDetails);

        //finding and modifying object
        const locIndex = LocationOptions.findIndex(extra.location);
        const loc = { label: extra.location, value: locIndex };
        setValueSingleLocation(loc);

        const workIndex = WorkOptions.findIndex(extra.workStatus);
        const work = { label: extra.workStatus, value: workIndex };
        setValueSingleWork(work);
      })
      .catch((err) => {
        console.log("error in getting table:", err);
      });
  }

  if (emp && emp.moreDetails && !photo) {
    try {
      extraFields = JSON.parse(emp.moreDetails);
    } catch {
      console.log("in catch block");
    } finally {
      if (extraFields.photoId) {
        setPhoto(extraFields.photoId);
      }
    }
  }

  //employee delete function
  function deleteEmployee() {
    setOpenConfirm(true);
  }

  //image handling firebase
  function handleImageChange(e: any) {
    const image = e.target.files[0];

    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      uploadBytes(imageRef, image).then((response) => {
        getDownloadURL(response.ref).then((url) => setPhoto(url));
      });
    }
  }

  // getting initial values
  useEffect(() => {
    if (formtype === editForm) {
      const currentURL = window.location.href;
      const url = new URL(currentURL);
      const path = url.pathname;
      const segments = path.split("/");
      const id = Number(segments[segments.length - 1]);
      getEmployee(id);
      setFetchID(id);
    }
  }, [formtype]);

  const formik = useFormik<myObj>({
    initialValues: initialvalues,

    onSubmit: (values) => {
      interface more {
        location?: string | null;
        photoId?: string | null;
        workStatus?: string | null;
      }

      // creating object for moew details
      let moreDetailsObject: more = {
        location: null,
        workStatus: null,
        photoId: null,
      };

      const moredetails = (
        valueSingleLocation: selectOptions | undefined,
        valueSingleWork: selectOptions | undefined
      ) => {
        moreDetailsObject = {
          location: valueSingleLocation ? valueSingleLocation.label : null,
          workStatus: valueSingleWork ? valueSingleWork.label : null,
          photoId: photo,
        };
      };
      moredetails(valueSingleLocation, valueSingleWork);

      //mapping skills
      const skillToPost = valueMultipleSkill.map((obj) => Number(obj.value));

      // object to push upon submission
      const newEntry = {
        firstName: values.fullName,
        lastName: "",
        email: values.mailID,
        phone: values.phoneNumber,
        designation: valueSingleDesignation?.label,
        dob: values.dateOfBirth,
        dateOfJoining: values.dateOfJoining,
        skills: skillToPost,
        moreDetails: JSON.stringify(moreDetailsObject),
        salary: "345345",
        address: "Back street",
      };

      if (formtype === addForm) {
        postData(addEmployeeQuery, newEntry)
          .then(() => {
            updateData({ name: newEntry.firstName, message: "has been added" });
            navigate("/");
          })
          .catch((err) => {
            console.log("error in posting new employee", err);
          });
      } else if (formtype === editForm) {
        editData(`/employee/${fetchID}`, newEntry)
          .then((res) => {
            console.log(res, "response udpate");
            updateData({
              name: newEntry.firstName,
              message: "has been edited",
            });
            navigate("/");
          })
          .catch((err) => console.log(err, "udpate"));
      }
    },

    validationSchema,

    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <OuterFormContainer>
        {openConfirm ? (
          <Confirm
            confirm={openConfirm}
            name={formik.values.fullName}
            id={emp?.id}
          ></Confirm>
        ) : (
          ""
        )}

        <label>
          <img
            src={photo ? photo : placeHolderImage}
            alt="placeholder/profile image"
            className="ProfilePhoto"
          />
          <ProfilePhotoInput
            type="file"
            accept="image/png, image/jpeg"
            onChange={(event) => handleImageChange(event)}
          />
        </label>

        <InnerFormContainer>
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
                onChange={(o) => setValueSingleLocation(o)}
              ></Select>
            </FormFieldDivider>
          </FormDivider>
        </InnerFormContainer>
      </OuterFormContainer>
      <ButtonContainer>
        <Button
          buttontype="regularButton"
          buttontext="Cancel"
          onSmash={() => navigate(-1)}
        />

        {formtype === editForm ? (
          <Button
            buttontype="deleteButton"
            buttontext="Delete"
            buttonicon=""
            onSmash={() => deleteEmployee()}
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
