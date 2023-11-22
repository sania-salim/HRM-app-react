import {
  TableStyled,
  TableRowStyled,
  TableHeaderStyled,
  TableDataStyled,
} from "./table.style";
// import { employeeList } from "../../core/config/constants";
import { useNavigate } from "react-router-dom";
import { tableContent } from "../../core/config/content";
import { getData } from "../../core/api/api";
import { useEffect, useState } from "react";

// const tempObj = employeeList;

export interface iEmployee {
  id: number;
  firstName: string;
  designation: string;
  email: string;
  dateOfJoining: string;
  dob: string;
  skills: Array<object>;
  // workstatus
  // location
}

function Table() {
  const navigate = useNavigate();
  const [temp, setTemp] = useState([]);
  useEffect(getTable, []);

  function getTable() {
    getData("/employee")
      .then((response) => {
        setTemp(response.data.data.employees);
        console.log("emp", temp);
      })
      .catch((err) => {
        console.log("error in getting table:", err);
      });
  }

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
          {temp.map((item: iEmployee) => (
            <TableRowStyled
              key={item.id}
              onClick={(e) => navigateToPage(e, item.id)}
            >
              <TableDataStyled>{item.id}</TableDataStyled>
              <TableDataStyled>{item.firstName}</TableDataStyled>
              <TableDataStyled>{item.designation}</TableDataStyled>
              <TableDataStyled>{item.email}</TableDataStyled>
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
