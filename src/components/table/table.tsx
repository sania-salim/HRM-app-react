import {
  TableStyled,
  TableRowStyled,
  TableHeaderStyled,
  TableDataStyled,
} from "./table.style";
import { employeeList } from "../../core/config/constants";
import { useNavigate } from "react-router-dom";

import { tableContent } from "../../core/config/content";

const tempObj = employeeList;

function Table() {
  const navigate = useNavigate();

  function navigateToPage(
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number
  ) {
    const target = e.target as HTMLElement;

    const fetchId = id - 1;

    console.log(target.tagName.toLocaleLowerCase());
    if (target.tagName.toLocaleLowerCase() === "td") {
      navigate(`/details/${fetchId}`);
    } else if (target.tagName.toLocaleLowerCase() === "img") {
      navigate(`/edit/${fetchId}`);
    }
  }

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
