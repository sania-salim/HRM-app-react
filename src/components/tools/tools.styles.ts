import styled from "styled-components";

export const ToolsContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const OuterToolsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 55px;
`;

export const SearchContainer = styled.div`
  display: flex;
  height: 25px;
  gap: 10px;
  align-self: center;
  align-items: center;
  padding: 4px 10px;
  background-color: var(--themeGrey);
  border-radius: 2px;
`;

export const SearchInput = styled.input`
  border: 0;
  border-radius: 3px;
  padding-left: 5px;
  outline: none;
  width: 250px;
  background-color: var(--themeGrey);
`;
