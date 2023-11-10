import styled from "styled-components";

export const TableStyled = styled.table`
  border-spacing: 0;
  margin: 0 auto;
`;

export const TableRowStyled = styled.tr`
  height: 42px;
  width: 100%;
`;

export const TableHeaderStyled = styled.th`
  font-weight: 600px;
  color: var(--themeWhite);
  text-align: left;
  background-color: var(--primaryDark);
  padding: 15px 50px;
  border-bottom: 1px solid #ddd;
`;

export const TableDataStyled = styled.td`
  text-align: left;
  padding: 10px 50px;
  border-bottom: 1px solid #ddd;
`;
