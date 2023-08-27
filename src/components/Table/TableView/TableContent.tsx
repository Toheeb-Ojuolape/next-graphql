import { Channels, Channel } from "@/interfaces/Channel";
import React from "react";
import { numberFormatter, textFormatter } from "@/utils/textFormatter";
import { dateFormatter } from "@/utils/dateFormatter";

function TableContent(props: { channels: Channels }) {
  return (
    <tbody>
      {props.channels.list.map((channel: Channel, i: number) => (
        <tr key={i}>
          <td>{numberFormatter(channel.block_age)}</td>
          <td>{numberFormatter(channel.capacity)}</td>
          <td>{textFormatter(channel.chan_point)}</td>
          <td>{dateFormatter(channel.last_update_date)}</td>
          <td>{channel.long_channel_id}</td>
        </tr>
      ))}
    </tbody>
  );
}
export default TableContent;
