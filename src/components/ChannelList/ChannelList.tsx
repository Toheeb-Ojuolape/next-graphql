import { Channels } from "@/interfaces/Channel";
import Tabs from "../Tabs/Tabs";
import { useState } from "react";

import Table from "../Table/Table";
import Graphview from "../Graph/GraphView";
import Filter from "../Filter/Filter";

export default function ChannelList(props: {
  channels: Channels;
  setDirection: Function;
  setSortBy: Function;
  setSearch: Function;
  page: number;
  setPage: Function;
  loading: boolean;
  setLimit: Function;
  offset: number;
  limit: number;
  sortBy: string;
  direction: string;
}) {
  const [active, setActive] = useState("table");
  return (
    <div className="my-5">
      <Tabs active={active} setActive={setActive} />
      <Filter
        setSearch={props.setSearch}
        setDirection={props.setDirection}
        setSortBy={props.setSortBy}
        active={active}
      />

      {active === "table" && (
        <Table
          channels={props.channels}
          setDirection={props.setDirection}
          setSearch={props.setSearch}
          setSortBy={props.setSortBy}
          page={props.page}
          setPage={props.setPage}
          setLimit={props.setLimit}
          loading={props.loading}
        />
      )}

      {active === "graph" && (
        <Graphview loading={props.loading} channels={props.channels} />
      )}
    </div>
  );
}
