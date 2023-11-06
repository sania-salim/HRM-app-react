import {
  TableStyled,
  TableRowStyled,
  TableHeaderStyled,
  TableDataStyled,
} from "./table.style";

const tempObj = [
  { id: 1001, name: "Tom" },
  { id: 1002, name: "Jerry" },
];

function Table() {
  return (
    <>
      <TableStyled>
        <TableRowStyled>
          <TableHeaderStyled>ID</TableHeaderStyled>
          <TableHeaderStyled>Name</TableHeaderStyled>
        </TableRowStyled>

        {tempObj.map((item) => (
          <TableRowStyled>
            <TableDataStyled>{item.id}</TableDataStyled>
            <TableDataStyled>{item.name}</TableDataStyled>
          </TableRowStyled>
        ))}
      </TableStyled>
    </>
  );
}

export default Table;
