import styled from "styled-components";

export const TableStyled = styled.table`
  border-spacing: 0;
`;

export const TableRowStyled = styled.tr`
  height: 42px;
`;

export const TableHeaderStyled = styled.th`
  font-weight: 600px;
  color: var(--themeWhite);
  text-align: left;
  background-color: var(--primaryDark);
  padding: 30px;
  border-bottom: 1px solid #ddd;
`;

export const TableDataStyled = styled.td`
  text-align: left;
  padding-left: 30px;
  border-bottom: 1px solid #ddd;
`;
