export default function PageButton(props: {
  className: string;
  children: React.ReactNode;
  pageNumber: number;
  setPage: Function;
}) {
  const handlePageChange = () => {
    props.setPage(props.pageNumber);
    window.scroll(0, 0);
  };
  return (
    <button
      onClick={handlePageChange}
      className={props.className + " pageButton"}
    >
      {props.children}
    </button>
  );
}
