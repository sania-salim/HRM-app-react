import {
  LabelForm,
  DropDownUl,
  DropDownLi,
  CustomSelectContainer,
} from "./form.style.ts";

const SelectOptions = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function CustomSelect() {
  return (
    <CustomSelectContainer>
      <LabelForm>Check off all applicable:</LabelForm>
      <DropDownUl>
        {SelectOptions.map((option) => (
          <DropDownLi key={option.value}>{option.label}</DropDownLi>
        ))}
      </DropDownUl>
    </CustomSelectContainer>
  );
}

export default CustomSelect;
