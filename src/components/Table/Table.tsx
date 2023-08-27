import { Channels } from "@/interfaces/Channel";
import TableView from "../Table/TableView/TableView";
import TableFilter from "../Table/TableFilter/TableFilter";
import Pagination from "./Pagination/Pagination";

export default function Table(props: {
  channels: Channels;
  setDirection: Function;
  setSortBy: Function;
  setSearch: Function;
  page: number;
  setPage: Function;
  loading: boolean;
}) {
  return (
    <div>
      <TableFilter
        setDirection={props.setDirection}
        setSortBy={props.setSortBy}
        setSearch={props.setSearch}
      />
      {props.channels && (
        <TableView channels={props.channels} loading={props.loading} />
      )}

      <Pagination page={props.page} setPage={props.setPage} />
    </div>
  );
}
