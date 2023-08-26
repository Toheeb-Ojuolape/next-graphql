import { ChannelQuery } from "@/api/queries/queries";
import { useQuery } from "@apollo/client";
import { Channel } from "@/interfaces/Channel";

export default function ChannelList() {
    const { loading, error, data } = useQuery(ChannelQuery, {
        variables: {
          pubkey: process.env.NEXT_APP_AMBOSS_PUB_KEY,
          page: { limit: 10, offset: 10 }, // Adjust these values as needed
          order: { field: "capacity", direction: "DESC" }, // Adjust the sorting order
        },
      });

  if (loading) {
    return <p>Loading channels...</p>;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <ul>
      {data.getNode.graph_info.channels.channel_list.list.map((channel:Channel, i: number) => (
        <li key={i}>{channel.capacity}</li>
      ))}
    </ul>
  );
}
