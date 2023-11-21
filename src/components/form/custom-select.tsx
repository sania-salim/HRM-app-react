import { useState } from "react";
import {
  LabelForm,
  DropDownUl,
  DropDownLi,
  InputHalfStyled,
  CustomSelectContainer,
} from "./form.style.ts";
import { customSelect } from "../../core/config/content.ts";

const SelectOptions = [
  { label: "HTML", value: 0 },
  { label: "CSS", value: 1 },
  { label: "React", value: 2 },
  { label: "Node", value: 3 },
  { label: "Angular", value: 4 },
];

let listArray: Array<string>;

// array that stores the selected skills
export const selectedSkills: string[] = [];

export function CustomSelect() {
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
      <LabelForm>Check off all applicable skills:</LabelForm>
      <InputHalfStyled onClick={toggleDropdown}></InputHalfStyled>
      {selectIsOpen && (
        <DropDownUl>
          {SelectOptions.map((option) => (
            <DropDownLi
              className={
                selectedSkills.includes(option.label) ? "isSelected" : ""
              }
              tabIndex={option.value}
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

export let selectedOption: string;

interface SelectProps {
  selectList: string;
}

export let workOptionSelected: string;
export let locationOptionSelected: string;
export let designationSelected: string;

export const CustomSimpleSelect: React.FC<SelectProps> = ({
  selectList,
}: SelectProps) => {
  const [selectIsOpen, setSelectIsOpen] = useState(false);

  function toggleDropdown() {
    setSelectIsOpen(!selectIsOpen);
  }

  // function selectItem() {
  //   setItemSelection(true);
  // }

  function selectOption(option: string, selectList: string) {
    console.log(listName);

    if (selectList === "workOptions") {
      workOptionSelected = option;
      console.log(workOptionSelected);
    } else if (selectList === "workLocation") {
      locationOptionSelected = option;
      console.log(locationOptionSelected);
    } else if (selectList === "designation") {
      designationSelected = option;
      console.log(designationSelected);
    }
  }

  let listName: string = "workOptions";

  if (selectList === "workOptions") {
    listArray = ["Work from home", "Office"];
    listName = "work mode:";
  } else if (selectList === "workLocation") {
    listArray = [
      "Ganga TP-3",
      "Lulu Cyber Tower",
      "Artech Magnet Vazhuthacaud",
      "UL Cyber Park Calicut",
      "Nisagandhi, Infopark Koratty",
    ];
    listName = "work location:";
  } else if (selectList === "designation") {
    listArray = [
      "Engineer",
      "Senior Engineer",
      "Lead Engineer",
      "Architect",
      "Principal Engineer",
    ];
    listName = "designation:";
  } else console.log("IM doomed");

  return (
    <CustomSelectContainer>
      <LabelForm>Select {listName}</LabelForm>
      <InputHalfStyled onClick={toggleDropdown}></InputHalfStyled>
      {selectIsOpen && (
        <DropDownUl>
          {listArray.map((option) => (
            <DropDownLi
              onClick={() => {
                selectOption(option, selectList);
              }}
            >
              {option}
            </DropDownLi>
          ))}
        </DropDownUl>
      )}
    </CustomSelectContainer>
  );
};
