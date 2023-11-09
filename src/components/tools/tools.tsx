import Button from "../buttons/button.tsx";
import {
  ToolsContainer,
  OuterToolsContainer,
  SearchContainer,
  SearchInput,
} from "./tools.styles.ts";
import { Link } from "react-router-dom";

function Tools() {
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
        <img src="src/assets/filter violet.svg" alt="" />
      </ToolsContainer>
    </OuterToolsContainer>
  );
}

export default Tools;
