import {
  LabelForm,
  InputFullStyled,
  InputHalfStyled,
  FormDivider,
  FormFieldDivider,
  InnerFormContainer,
  OuterFormContainer,
  ValidationError,
} from "./form.style.ts";
import CustomSelect from "./custom-select.tsx";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string().required(),
  dateOfJoining: Yup.string().required(),
  dateOfBirth: Yup.string().required(),
  mailID: Yup.string().email().required(),
  phoneNumber: Yup.string().required(),
});
function Form() {
  const formik = useFormik({
    initialValues: {
      fullName: "Julie",
      dateOfJoining: "",
      dateOfBirth: "",
      mailID: "julie@mail.com",
      phoneNumber: "",
    },
    onSubmit: () => {
      console.log("values:", formik.values);
    },
    validationSchema,
  });

  console.log("values:", formik.values);
  console.log("errors:", formik.errors);

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
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
