import { Channels } from "@/interfaces/Channel";
import TableView from "../Table/TableView/TableView";
import TableFilter from "../Table/TableFilter/TableFilter";
import Pagination from "./Pagination/Pagination";
import Select from "../Forms/Select";

export default function Table(props: {
  channels: Channels;
  setDirection: Function;
  setSortBy: Function;
  setSearch: Function;
  page: number;
  setPage: Function;
  loading: boolean;
  setLimit: Function;
}) {
  const limits = Array.from({ length: 5 }, (_, index) => ({
    name: (index + 1)*10,
    value: (index + 1) * 10,
  }));
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
      <div className="flex justify-end">
      <Select
        onChange={props.setLimit}
        placeholder={"Limit"}
        options={limits}
      />
      </div>
      <Pagination page={props.page} setPage={props.setPage} />
    </div>
  );
}
