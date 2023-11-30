import Button from "../buttons/button.tsx";
import {
  ToolsContainer,
  OuterToolsContainer,
  SearchContainer,
  SearchInput,
} from "./tools.styles.ts";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Select } from "../form/dropdown.tsx";
// import { SkillOptions } from "../form/form.tsx";
import { useMyContext, empData } from "../../context/mycontext.tsx";
import { selectOptions } from "../form/dropdown.tsx";
import { getData } from "../../core/api/api.ts";
import filterIcon from "../../assets/images/filterViolet.svg";
import sortIcon from "../../assets/sortViolet.svg";
import searchIcon from "../../assets/search violet.svg";
import { PaginationLimit } from "../../core/config/constants.ts";
import addEmployeeIcon from "../../assets/add.svg";

function Tools() {
  const { table, getEmpData, sortOrder, setSortOrder } = useMyContext();
  const [valueMultipleSkill, setValueMultipleSkill] = useState<selectOptions[]>(
    []
  );
  const [SkillOptions, setSkillOptions] = useState([]);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const offset = 0;
  const query = `employee?limit=${PaginationLimit}&offset=${offset}&sortBy=id&sortDir=${sortOrder}`;

  // fetching options for skill dropdown
  useEffect(() => {
    getData(`/skills`).then((skillObj) => {
      let temp = skillObj.data.data;
      const skills = temp.map(
        ({ skill, id }: { skill: string; id: number }) => ({
          label: skill,
          value: id,
        })
      );
      setSkillOptions(skills);
    });
  }, []);

  // filter function
  useEffect(() => {
    if (valueMultipleSkill.length != 0) {
      filterBySkill(valueMultipleSkill);
    } else {
      getData(query)
        .then((response) => {
          getEmpData(response.data.data.employees);
          console.log("emp table fetched", table);
          // setLoadState(false);
        })
        .catch((err) => {
          console.log("error in getting table:", err);
        });
    }
  }, [valueMultipleSkill]);

  function filterBySkill(valueMultipleSkill: selectOptions[]) {
    console.log("selected filters", valueMultipleSkill);

    const newEmp = table?.filter((employee: empData) => {
      console.log("skills of employee", employee.skills);

      return valueMultipleSkill.every((filterItem) =>
        employee.skills?.some((skill: any) => skill.id === filterItem.value)
      );
    });

    console.log(newEmp);
    if (newEmp) {
      getEmpData(newEmp);
    }
  }

  // sort function
  function changeSort() {
    if (sortOrder === "asc") {
      setSortOrder("desc");
      console.log("im trying to sort to desc");
    } else {
      setSortOrder("asc");
      console.log("im trying to sort to asc");
    }
  }

  // search function
  function promptSearch(name: string) {
    if (!name) {
      console.log("querying because search is empty, prompt:", prompt);

      getData(query)
        .then((response) => {
          getEmpData(response.data.data.employees);
          console.log("emp table fetched", table);
          // setLoadState(false);
        })
        .catch((err) => {
          console.log("error in getting table:", err);
        });
    } else {
      console.log("showing results of search");

      const prompt = name.toLowerCase();
      const searchResult = table?.filter((employee: empData) => {
        return employee.firstName.toLocaleLowerCase().startsWith(prompt);
      });

      if (searchResult) {
        getEmpData(searchResult);
      }
    }
  }

  return (
    <OuterToolsContainer>
      <Link to="/add">
        <Button
          buttontype="iconButton"
          buttontext="Add employee"
          buttonicon={addEmployeeIcon}
        />
      </Link>

      <ToolsContainer>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search by name..."
            onChange={(event) => promptSearch(event.target.value)}
          />
          <img src={searchIcon} alt="" />
        </SearchContainer>
        <img src={sortIcon} alt="" onClick={changeSort} />
        <>
          <img
            src={filterIcon}
            alt=""
            className="filtericon"
            onClick={() => setIsSelectOpen(!isSelectOpen)}
          />
          <Select
            multiple
            options={SkillOptions}
            value={valueMultipleSkill}
            onChange={(o) => setValueMultipleSkill(o)}
            isVisible={isSelectOpen}
          ></Select>
        </>
      </ToolsContainer>
    </OuterToolsContainer>
  );
}

export default Tools;
