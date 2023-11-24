import Button from "../buttons/button.tsx";
import {
  ToolsContainer,
  OuterToolsContainer,
  SearchContainer,
  SearchInput,
} from "./tools.styles.ts";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Select } from "../form/dropdown.tsx";
import { SkillOptions } from "../form/form.tsx";
import { useMyContext } from "../../context/mycontext.tsx";
import { selectOptions } from "../form/dropdown.tsx";

function Tools() {
  const { table, getEmpData } = useMyContext();
  const [valueMultipleSkill, setValueMultipleSkill] = useState<selectOptions[]>(
    []
  );

  const [filter, setFilter] = useState([]);

  function filterBySkill(filterArr: Array<>) {
    const newEmp = table?.filter((employee: myObj) => {
      filterArr.forEach((skill: string) => {
        employee.skill.includes(skill);
      });
    });

    return newEmp;
  }

  return (
    <OuterToolsContainer>
      <Link to="/add">
        <Button
          buttontype="iconButton"
          buttontext="Add employee"
          buttonicon="src/assets/add.svg"
        />
      </Link>

      <ToolsContainer>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search by name..." />
          <img src="src/assets/search violet.svg" alt="" />
        </SearchContainer>
        <img src="src/assets/sort violet.svg" alt="" />
        <>
          <img
            src="src/assets/filter violet.svg"
            alt=""
            className="filtericon"
            //onClick={filterBySkill}
          />
          <Select
            multiple
            options={SkillOptions}
            value={valueMultipleSkill}
            onChange={(o) => setValueMultipleSkill(o)}
          ></Select>
        </>
      </ToolsContainer>
    </OuterToolsContainer>
  );
}

export default Tools;
