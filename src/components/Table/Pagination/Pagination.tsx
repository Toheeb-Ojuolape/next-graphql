import PageButton from "./PageButton";
function Pagination(props: {
  page: number;
  defaultPage?: number;
  setPage: Function;
}) {
  const totalPages = 5;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="text-center flex justify-center">
      {pages.map((pageNumber) => (
        <PageButton
          pageNumber={pageNumber}
          key={pageNumber}
          className={
            pageNumber === (props.defaultPage ? props.defaultPage : props.page)
              ? "activePage"
              : ""
          }
          setPage={props.setPage}
        >
          {pageNumber}
        </PageButton>
      ))}
    </div>
  );
}

export default Pagination;
