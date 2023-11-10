import {
  LabelForm,
  DropDownUl,
  DropDownLi,
  InputHalfStyled,
  CustomSelectContainer,
} from "./form.style.ts";

const SelectOptions = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "React" },
  { label: "Node" },
  { label: "Angular" },
];

const SelectedSkills = [];

function CustomSelect() {
  return (
    <CustomSelectContainer>
      <LabelForm>Check off all applicable:</LabelForm>
      <InputHalfStyled></InputHalfStyled>
      <DropDownUl>
        {SelectOptions.map((option) => (
          <DropDownLi key={option.label}>{option.label}</DropDownLi>
        ))}
      </DropDownUl>
    </CustomSelectContainer>
  );
}

export default CustomSelect;
