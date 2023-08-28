import React from "react";
import "./Filter.css";
import Select from "@/components/Forms/Select";
import Input from "@/components/Forms/Input";
import { NextRouter } from "next/router";

function Filter(props: {
  active: string;
  setSearch: Function;
  setDirection: Function;
  setSortBy: Function;
  router: NextRouter;
}) {
  const directions = [
    { name: "Ascending", value: "ASC" },
    { name: "Descending", value: "DESC" },
  ];

  const sortBys = [
    { name: "Capacity", value: "capacity" },
    { name: "Channel ID", value: "chan_id" },
    { name: "Channel Age", value: "channel_age" },
    { name: "Fee base", value: "fee_base_msat" },
    { name: "Last Update", value: "last_update" },
  ];
  return (
    <div className="table-filter">
      <Input
        onChange={props.setSearch}
        placeholder={"Search by Channel ID or Point"}
        type={"text"}
      />
      <Select
        onChange={props.setSortBy}
        placeholder={"Sort By"}
        options={sortBys}
        defaultValue={String(props.router.query.sortBy)}
      />

      <Select
        onChange={props.setDirection}
        placeholder={"Direction"}
        options={directions}
        defaultValue={String(props.router.query.direction)}
      />
    </div>
  );
}

export default Filter;
