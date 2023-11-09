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
  {
    id: 1003,
    name: "Spikes",
    designation: " Guard dog",
    mailID: "spikes@localguardian.com",
  },
  {
    id: 1004,
    name: "Bugs",
    designation: " Bunny",
    mailID: "bugsbunny@speed.com",
  },
  {
    id: 1005,
    name: "Courage",
    designation: "Cowardly dog",
    mailID: "courage@horror.com",
  },
];

function Table() {
  return (
    <>
      <TableStyled>
        <thead>
          <TableRowStyled>
            <TableHeaderStyled>ID</TableHeaderStyled>
            <TableHeaderStyled>Name</TableHeaderStyled>
            <TableHeaderStyled>Designation</TableHeaderStyled>
            <TableHeaderStyled>Mail ID</TableHeaderStyled>
            <TableHeaderStyled>Work status</TableHeaderStyled>
            <TableHeaderStyled>Edit</TableHeaderStyled>
          </TableRowStyled>
        </thead>
        <tbody>
          {tempObj.map((item) => (
            <TableRowStyled key={item.id}>
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
        </tbody>
      </TableStyled>
    </>
  );
}

export default Table;
