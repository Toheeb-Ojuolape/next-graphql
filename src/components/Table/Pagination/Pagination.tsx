import "./Pagination.css";
import { useState } from "react";

function PageButton(props: {
  className: string;
  children: React.ReactNode;
  pageNumber: number;
  setPage: Function;
}) {
  return (
    <button
      onClick={() => props.setPage(props.pageNumber)}
      className={props.className + " pageButton"}
    >
      {props.children}
    </button>
  );
}

function Pagination(props:{page:number,setPage:Function}) {
  const totalPages = 5;
  const pages = Array.from({ length: totalPages }, (_, index) => (index + 1));
  

  return (
    <div className="text-center flex justify-center">
      {pages.map((pageNumber) => (
        <PageButton
          pageNumber={pageNumber}
          key={pageNumber}
          className={pageNumber === props.page ? "activePage" : ""}
          setPage={props.setPage}
        >
          {pageNumber}
        </PageButton>
      ))}
    </div>
  );
}

export default Pagination;
