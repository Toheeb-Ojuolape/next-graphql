import React from "react";
import Graph from "./Graph";
import { Channels } from "@/interfaces/Channel";
import { dateFormatter } from "@/utils/dateFormatter";
import "./GraphView.css"

function GraphView(props: { channels: Channels }) {
  const blockAgeData = props.channels.list.map((channel) => channel.block_age);
  const capacityData = props.channels.list.map((channel) => channel.capacity);
  const labels = props.channels.list.map((channel) =>
    dateFormatter(channel.last_update_date)
  );
  return (
    <div className="graphView">
      <Graph
        labels={labels}
        title={"Graph of Block age against Last Updated"}
        channelData={blockAgeData}
        label={"Block Age"}
      />

      <Graph
        labels={labels}
        title={"Graph of Capacity against Last Updated"}
        channelData={capacityData}
        label={"Capacity"}
      />
    </div>
  );
}

export default GraphView;
