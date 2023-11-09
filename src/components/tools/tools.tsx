import Button from "../buttons/button.tsx";
import {
  ToolsContainer,
  OuterToolsContainer,
  SearchContainer,
  SearchInput,
} from "./tools.styles.ts";

function Tools() {
  return (
    <OuterToolsContainer>
      <Button
        buttontype="iconButton"
        buttontext="Add employee"
        buttonicon="src/assets/add.svg"
      />

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
