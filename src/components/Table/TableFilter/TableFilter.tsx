import React, { useState } from "react";
import "./TableFilter.css";
import Select from "@/components/Forms/Select";
import Input from "@/components/Forms/Input";

function TableFilter(props:{setSearch:Function,setDirection:Function,setSortBy:Function}) {
  const directions = [
    { name: "Ascending", value: "ASC" },
    { name: "Descending", value: "DESC" },
  ];

  const sortBys = [
    {name:"Capacity",value:"capacity"},
    {name:"Channel ID",value:"chan_id"},
    {name:"Channel Age",value:"channel_age"},
    {name:"Fee base",value:"fee_base_msat"},
    {name:"Last Update",value:"last_update"},
  ]
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
      />

      <Select
        onChange={props.setDirection}
        placeholder={"Direction"}
        options={directions}
      />
    </div>
  );
}

export default TableFilter;
