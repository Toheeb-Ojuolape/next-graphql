import { Channels } from "@/interfaces/Channel";
import TableView from "../Table/TableView/TableView";
import Pagination from "./Pagination/Pagination";
import Select from "../Forms/Select";
import { NextRouter } from "next/router";

export default function Table(props: {
  channels: Channels;
  setDirection: Function;
  setSortBy: Function;
  setSearch: Function;
  page: number;
  setPage: Function;
  loading: boolean;
  setLimit: Function;
  router: NextRouter;
}) {
  const limits = Array.from({ length: 5 }, (_, index) => ({
    name: (index + 1) * 10,
    value: (index + 1) * 10,
  }));

  const handleSetLimit = (e:string) => {
    window.scroll(0, 0);
    props.setLimit(e);
  };

  const handleSetPage = (e:number) =>{
    window.scroll(0, 0);
    props.setPage(e);
  }
  return (
    <div>
      {props.channels && (
        <TableView channels={props.channels} loading={props.loading} />
      )}
      <div className="flex justify-end">
        <Select
          onChange={handleSetLimit}
          placeholder={"Limit"}
          options={limits}
          defaultValue={String(props.router.query.limit)}
        />
      </div>
      <Pagination
        defaultPage={Number(props.router.query.offset) / 10}
        page={props.page}
        setPage={handleSetPage}
      />
    </div>
  );
}
