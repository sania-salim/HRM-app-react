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

function Form() {
  return (
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
          <InputFullStyled type="text"></InputFullStyled>
        </FormFieldDivider>

        <FormDivider>
          <FormFieldDivider>
            <LabelForm>Date of joining</LabelForm>
            <InputHalfStyled type="date"></InputHalfStyled>
          </FormFieldDivider>

          <FormFieldDivider>
            <LabelForm>Date of birth</LabelForm>
            <InputHalfStyled type="date"></InputHalfStyled>
          </FormFieldDivider>
        </FormDivider>

        <h3>Contact details</h3>
        <FormDivider>
          <FormFieldDivider>
            <LabelForm>Phone number</LabelForm>
            <InputHalfStyled type="text"></InputHalfStyled>
          </FormFieldDivider>

          <FormFieldDivider>
            <LabelForm>Mail ID</LabelForm>
            <InputHalfStyled type="email"></InputHalfStyled>
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
  );
}

export default Form;
