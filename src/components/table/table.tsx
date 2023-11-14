import {
  TableStyled,
  TableRowStyled,
  TableHeaderStyled,
  TableDataStyled,
} from "./table.style";

import { tableContent } from "../../core/config/content";

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
        <TableRowStyled>
          <TableHeaderStyled>{tableContent.IDheading}</TableHeaderStyled>
          <TableHeaderStyled>{tableContent.NameHeading}</TableHeaderStyled>
          <TableHeaderStyled>
            {tableContent.DesignationHeading}
          </TableHeaderStyled>
          <TableHeaderStyled>{tableContent.MailIDHeading}</TableHeaderStyled>
          <TableHeaderStyled>
            {tableContent.WorkStatusHeading}
          </TableHeaderStyled>
          <TableHeaderStyled>{tableContent.EditHeading}</TableHeaderStyled>
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
