import { useState } from "react";
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

// array that stores the selected skills
export const selectedSkills: string[] = [];

function CustomSelect() {
  const [selectIsOpen, setSelectIsOpen] = useState(false);

  function toggleDropdown() {
    setSelectIsOpen(!selectIsOpen);
  }

  function addSkill(skill: string) {
    selectedSkills.push(skill);
    console.log("skills", selectedSkills);
  }

  return (
    <CustomSelectContainer>
      <LabelForm>Check off all applicable:</LabelForm>
      <InputHalfStyled onClick={toggleDropdown}></InputHalfStyled>
      {selectIsOpen && (
        <DropDownUl>
          {SelectOptions.map((option) => (
            <DropDownLi
              key={option.label}
              onClick={() => addSkill(option.label)}
            >
              {option.label}
            </DropDownLi>
          ))}
        </DropDownUl>
      )}
    </CustomSelectContainer>
  );
}

export default CustomSelect;
