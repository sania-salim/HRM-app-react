import {
  TableStyled,
  TableRowStyled,
  TableHeaderStyled,
  TableDataStyled,
} from "./table.style";

function Table() {
  return (
    <>
      <TableStyled>
        <TableRowStyled>
          <TableHeaderStyled>Heading 1</TableHeaderStyled>
          <TableHeaderStyled>Heading 2</TableHeaderStyled>
          <TableHeaderStyled>Heading 3</TableHeaderStyled>
          <TableHeaderStyled>Heading 4</TableHeaderStyled>
        </TableRowStyled>

        <TableRowStyled>
          <TableDataStyled>Data 1</TableDataStyled>
          <TableDataStyled>Data 2</TableDataStyled>
          <TableDataStyled>Data 3</TableDataStyled>
          <TableDataStyled>Data 4</TableDataStyled>
        </TableRowStyled>
      </TableStyled>
    </>
  );
}

export default Table;
