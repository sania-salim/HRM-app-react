import { useEffect, useState } from "react";
import { useMyContext } from "../../context/mycontext";
import nextIcon from "../../assets/next.svg";
import previousIcon from "../../assets/previous.svg";

import {
  PaginationContainer,
  PageButton,
  MoveButton,
} from "./pagination.styled";

export function Pagination() {
  const [numPages, setNumPages] = useState<Array<number>>([]);
  const { setPageOffset, employeeCount } = useMyContext();
  const [currentPage, setCurrentPage] = useState(1);

  function paginateNext() {
    setPageOffset((prev) => prev + 10);
    setCurrentPage((prev) => prev + 1);
  }

  function paginatePrevious() {
    setPageOffset((prev) => prev - 10);
    setCurrentPage((prev) => prev - 1);
  }

  function goToPage(number: number) {
    const newOffset = (number - 1) * 10;
    setPageOffset(newOffset);
    setCurrentPage(number);
  }

  const pageCount: number = Math.ceil(employeeCount / 10);

  let arr: Array<number> = [];

  useEffect(() => {
    if (numPages.length === 0) {
      arr = [];
      for (let i: number = 1; i <= pageCount; i++) {
        arr.push(i);
      }
      setNumPages(arr);
    }
  }, [employeeCount]);

  return (
    <PaginationContainer>
      <MoveButton onClick={!(currentPage === 1) ? paginatePrevious : undefined}>
        <img src={previousIcon} alt="" />
      </MoveButton>

      <>
        {numPages.length
          ? numPages.map((number) => {
              return (
                <PageButton
                  onClick={() => goToPage(number)}
                  className={currentPage === number ? "selectedPage" : ""}
                >
                  {number}
                </PageButton>
              );
            })
          : null}
      </>

      <MoveButton
        onClick={!(currentPage === pageCount) ? paginateNext : undefined}
      >
        <img src={nextIcon} alt="" />
      </MoveButton>
    </PaginationContainer>
  );
}
