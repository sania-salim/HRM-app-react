import {
  LabelForm,
  InputFullStyled,
  InputHalfStyled,
  FormDivider,
  FormFieldDivider,
  InnerFormContainer,
  OuterFormContainer,
} from "./form.style.ts";
import CustomSelect from "./custom-select.tsx";
import { formContent } from "../../core/config/content.ts";

function Form() {
  return (
    <OuterFormContainer>
      <img
        src="src/assets/Profile photo.png"
        alt="placeholder/profile image"
        className="ProfilePhoto"
      />
      <InnerFormContainer>
        <h3>{formContent.formHeading}</h3>
        <FormFieldDivider>
          <LabelForm>{formContent.fullNameLabel}</LabelForm>
          <InputFullStyled type="text"></InputFullStyled>
        </FormFieldDivider>

        <FormDivider>
          <FormFieldDivider>
            <LabelForm>{formContent.dateOfJoiningLabel}</LabelForm>
            <InputHalfStyled type="date"></InputHalfStyled>
          </FormFieldDivider>

          <FormFieldDivider>
            <LabelForm>{formContent.dateOfBirthLabel}</LabelForm>
            <InputHalfStyled type="date"></InputHalfStyled>
          </FormFieldDivider>
        </FormDivider>

        <h3>{formContent.contactHeading}</h3>
        <FormDivider>
          <FormFieldDivider>
            <LabelForm>{formContent.phoneNumberLabel}</LabelForm>
            <InputHalfStyled type="text"></InputHalfStyled>
          </FormFieldDivider>

          <FormFieldDivider>
            <LabelForm>{formContent.mailIdLabel}</LabelForm>
            <InputHalfStyled type="email"></InputHalfStyled>
          </FormFieldDivider>
        </FormDivider>

        <h3>{formContent.employmentDetailsHeading}</h3>
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
  );
}

export default Form;
