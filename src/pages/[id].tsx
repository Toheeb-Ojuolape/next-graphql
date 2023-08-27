import { useState } from "react";
import ChannelList from "@/components/ChannelList/ChannelList";
import { Channel, Channels } from "@/interfaces/Channel";
import axios from "axios";
import { GetServerSideProps } from "next";
import { ApiProps } from "@/interfaces/ApiProps";
import { useRouter } from "next/router";
import { textFormatter } from "@/utils/textFormatter";
import ErrorComponent from "@/components/ErrorComponent/ErrorComponent";
import Header from "@/components/Header/Header";

export const getServerSideProps: GetServerSideProps<ApiProps> = async (
  context
) => {
  const { id, offset, limit, direction, sortBy } = context.query;
  let isLoading = true;

  const defaultOffset = offset ? offset : 10;
  const defaultLimit = limit ? limit : 10;
  const defaultDirection = direction ? direction : "ASC";
  const defaultSortBy = sortBy ? sortBy : "capacity";

  try {
    const response = await axios({
      method: "GET",
      url:
        "http://localhost:3000/api/graphql?pubkey=" +
        id +
        "&offset=" +
        defaultOffset +
        "&direction=" +
        defaultDirection +
        "&sortBy=" +
        defaultSortBy +
        "&limit=" +
        defaultLimit,
    });
    const data: Channels =
      response.data.data.getNode.graph_info.channels.channel_list;
    isLoading = false;
    return {
      props: {
        data,
        isLoading,
      },
    };
  } catch (error: any) {
    isLoading = false;
    const errorData: string = error.message;
    return {
      props: {
        errorData,
        isLoading,
      },
    };
  }
};

export default function Home(props: ApiProps) {
  const router = useRouter();
  const { id } = router.query;
  const [filteredData, setFilteredData] = useState<Channels | undefined>();
  const [direction, setDirection] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(10);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);

  const setNewDirection = async (d: string) => {
    if (d != direction) {
      setLoading(true);
      setDirection(d);
      filterByDirection(d);
    }
  };

  const setNewSortBy = (s: string) => {
    if (s != sortBy) {
      setLoading(true);
      setSortBy(s);
      filterBySortBy(s);
    }
  };

  const setNewOffset = (o: number) => {
    if (o != offset) {
      setLoading(true);
      setPage(o);
      setOffset(o * 10);
      filterByOffset(o * 10);
    }
  };

  const setNewLimit = (l: number) => {
    if (l != limit) {
      setLoading(true);
      setLimit(l);
      filterByLimit(l);
    }
  };

  const filterBySearch = (search: string) => {
    setSearch(search);
    if (props.data && !search) {
      setFilteredData(undefined);
    } else if (props.data && search) {
      let NewChannels: Channels = {
        pagination: {
          limit: 0,
          offset: 0,
        },
        list: [],
      };

      let newList = props.data?.list.filter((channel: Channel) => {
        return (
          channel.chan_point.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
          channel.long_channel_id.toLowerCase().indexOf(search.toLowerCase()) >
            -1
        );
      });
      NewChannels.pagination = props.data.pagination;
      NewChannels.list = newList;
      setFilteredData(NewChannels);
    }
  };

  const filterByOffset = (o: number) => {
    if (router.query) {
      router
        .replace({
          pathname: router.pathname,
          query: { ...router.query, offset: o },
        })
        .then((response) => {
          console.log(response);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      router.push({
        pathname: router.asPath,
        query: { offset: o, sortBy: "", direction: "", limit: "" },
      });
    }
  };

  const filterBySortBy = (e: string) => {
    if (router.query) {
      router
        .replace({
          pathname: router.pathname,
          query: { ...router.query, sortBy: e },
        })
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      router.push({
        pathname: router.asPath,
        query: { sortBy: e, offset: "", direction: "", limit: "" },
      });
    }
  };

  const filterByDirection = (d: string) => {
    if (router.query) {
      router
        .replace({
          pathname: router.pathname,
          query: { ...router.query, direction: d },
        })
        .then((response) => {
          console.log(response);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      router.push({
        pathname: router.asPath,
        query: { direction: d, offset: "", sortBy: "", limit: "" },
      });
    }
  };

  const filterByLimit = (l: number) => {
    if (router.query) {
      router
        .replace({
          pathname: router.pathname,
          query: { ...router.query, limit: l },
        })
        .then((response) => {
          console.log(response);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      router.push({
        pathname: router.asPath,
        query: { limit: l, direction: "", offset: "", sortBy: "" },
      });
    }
  };

  return (
    <div>
      {id && <Header id={id} />}
      {props.data && (
        <ChannelList
          setDirection={setNewDirection}
          setSearch={filterBySearch}
          setSortBy={setNewSortBy}
          channels={filteredData ? filteredData : props.data}
          page={page}
          setPage={setNewOffset}
          loading={loading}
          setLimit={setNewLimit}
          offset={offset}
          sortBy={sortBy}
          direction={direction}
          limit={limit}
        />
      )}

      {props.errorData && (
        <div>
          <ErrorComponent error={props.errorData} />
        </div>
      )}
    </div>
  );
}
