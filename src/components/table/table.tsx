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
        <thead>
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
        </thead>

        <tbody>
          {tempObj.map((item) => (
            <TableRowStyled
              key={item.id}
              onClick={(e) => navigateToPage(e, item.id)}
            >
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
