import {
  TableStyled,
  TableRowStyled,
  TableHeaderStyled,
  TableDataStyled,
} from "./table.style";
import { useNavigate } from "react-router-dom";
import { tableContent } from "../../core/config/content";
import { getData } from "../../core/api/api";
import { useEffect, useState } from "react";
import { useMyContext } from "../../context/mycontext";
import SpinnerLoader from "../loader/loader";
import { PaginationLimit } from "../../core/config/constants";
import editIcon from "../../assets/edit button violet.svg";
import wfhIcon from "../../assets/work-from-home.svg";

export interface iEmployee {
  id: number;
  firstName: string;
  designation: string;
  email: string;
  dateOfJoining: string;
  dob: string;
  skills: Array<object>;
}

function Table() {
  const navigate = useNavigate();
  const { table, getEmpData, sortOrder, pageOffset, setEmployeeCount } =
    useMyContext();
  const [loadState, setLoadState] = useState(true);
  useEffect(getTable, [sortOrder, pageOffset]);

  const query = `employ?limit=${PaginationLimit}&offset=${pageOffset}&sortBy=id&sortDir=${sortOrder}`;

  function getTable() {
    getData(query)
      .then((response) => {
        getEmpData(response.data.data.employees);
        setEmployeeCount(response.data.data.count);

        setLoadState(false);
      })
      .catch((err) => {
        console.log("error in getting table:", err);
        setLoadState(false);
        throw Error("Encountered an error in getting table");
      });
  }

  function navigateToPage(
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number
  ) {
    const target = e.target as HTMLElement;

    const fetchId = id;

    if (target.tagName.toLocaleLowerCase() === "td") {
      navigate(`/details/${fetchId}`);
    } else if (target.tagName.toLocaleLowerCase() === "img") {
      navigate(`/edit/${fetchId}`);
    }
  }

  return (
    <>
      <SpinnerLoader load={loadState} />
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
          {table?.map((item) => (
            <TableRowStyled
              key={item.id}
              onClick={(e) => navigateToPage(e, item.id)}
            >
              <TableDataStyled>{item.id}</TableDataStyled>
              <TableDataStyled>{item.firstName}</TableDataStyled>
              <TableDataStyled>{item.designation}</TableDataStyled>
              <TableDataStyled>{item.email}</TableDataStyled>
              <TableDataStyled>
                <img src={wfhIcon} alt="" />
              </TableDataStyled>
              <TableDataStyled>
                <img src={editIcon} alt="" />
              </TableDataStyled>
            </TableRowStyled>
          ))}
        </tbody>
      </TableStyled>
    </>
  );
}

export default Table;
