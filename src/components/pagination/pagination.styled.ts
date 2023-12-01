import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 40px auto;
`;

export const PageButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 2px solid var(--themeGrey);
  &:hover {
    color: white;
    border: 2px solid var(--primaryDark);
    background-color: var(--primaryDark);
    border: 0;
  }
`;

export const MoveButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 3px;
  background-color: white;
  border: 0;
  box-shadow: 0;
  &:hover {
    color: white;
    background-color: var(--selection);
  }
`;
