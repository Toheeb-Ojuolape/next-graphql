export default function PageButton(props: {
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