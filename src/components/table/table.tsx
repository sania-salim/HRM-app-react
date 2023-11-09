import {
  TableStyled,
  TableRowStyled,
  TableHeaderStyled,
  TableDataStyled,
} from "./table.style";
import { employeeList } from "../../core/config/constants";

const tempObj = employeeList;

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
