import { Channels } from "@/interfaces/Channel";
import React from "react";
import "./TableView.css";
import TableContent from "./TableContent";
import TableSkeletonLoader from "./TableSkeletonLoader";

function Table(props: { channels: Channels; loading: boolean }) {
  return (
    <div className="table-container">
      <table cellSpacing={"0"}>
        <thead>
          <tr>
            <th>Block age</th>
            <th>Capacity</th>
            <th>Channel Point</th>
            <th>Last Updated</th>
            <th>Channel ID</th>
          </tr>
        </thead>
        {!props.loading && props.channels && (
          <TableContent channels={props.channels} />
        )}

        {props.loading && <TableSkeletonLoader />}
      </table>
    </div>
  );
}

export default Table;
