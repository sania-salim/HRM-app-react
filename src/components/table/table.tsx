import {
  TableStyled,
  TableRowStyled,
  TableHeaderStyled,
  TableDataStyled,
} from "./table.style";

const tempObj = [
  {
    id: 1001,
    name: "Tom",
    designation: " Serial chaser",
    mailID: "tom@catchmouse.com",
  },
  {
    id: 1002,
    name: "Jerry",
    designation: " Domestic menace",
    mailID: "jerry@catchme.com",
  },
];

function Table() {
  return (
    <>
      <TableStyled>
        <TableRowStyled>
          <TableHeaderStyled>ID</TableHeaderStyled>
          <TableHeaderStyled>Name</TableHeaderStyled>
          <TableHeaderStyled>Designation</TableHeaderStyled>
          <TableHeaderStyled>Mail ID</TableHeaderStyled>
          <TableHeaderStyled>Work status</TableHeaderStyled>
          <TableHeaderStyled>Edit</TableHeaderStyled>
        </TableRowStyled>

        {tempObj.map((item) => (
          <TableRowStyled>
            <TableDataStyled>{item.id}</TableDataStyled>
            <TableDataStyled>{item.name}</TableDataStyled>
            <TableDataStyled>{item.designation}</TableDataStyled>
            <TableDataStyled>{item.mailID}</TableDataStyled>
            <TableDataStyled>
              <img src="src/assets/work-from-home.svg" alt="" />
            </TableDataStyled>
            <TableDataStyled>
              <img src="src/assets/edit button violet.svg" alt="" />
            </TableDataStyled>
          </TableRowStyled>
        ))}
      </TableStyled>
    </>
  );
}

export default Table;
