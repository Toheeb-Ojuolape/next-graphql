import { useState } from "react";
import ChannelList from "@/components/ChannelList/ChannelList";
import { Channels } from "@/interfaces/Channel";
import axios from "axios";
import { GetServerSideProps } from "next";
import { ApiProps } from "@/interfaces/ApiProps";
import { useRouter } from "next/router";
import { textFormatter } from "@/utils/textFormatter";
import ErrorComponent from "@/components/ErrorComponent/ErrorComponent";

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
  const [direction, setDirection] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(10);
  const [limit,setLimit] = useState(10)
  const [loading, setLoading] = useState(false);


  const setNewDirection = async (d: string) => {
    if (d != direction) {
      setLoading(true);
      setDirection(d);
      fetchDirection(d);
    }
  };

  const setNewSortBy = (s: string) => {
    if (s != sortBy) {
      setLoading(true);
      setSortBy(s);
      fetchSortBy(s);
    }
  };

  const setNewOffset = (o: number) => {
    if (o != offset) {
      setLoading(true);
      setPage(o);
      setOffset(o * 10);
      fetchOffset(o * 10);
    }
  };

  const setNewLimit = (l: number) => {
    if (l != limit) {
      setLoading(true);
      setLimit(l)
      fetchLimit(l);
    }
  };

  const fetchOffset = (o: number) => {
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

  const fetchSortBy = (e: string) => {
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

  const fetchDirection = (d: string) => {
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

  const fetchLimit = (l: number) => {
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
      <h1>Channel: {id && textFormatter(id)}</h1>
      {props.data && (
        <ChannelList
          setDirection={setNewDirection}
          setSearch={setSearch}
          setSortBy={setNewSortBy}
          channels={props.data}
          page={page}
          setPage={setNewOffset}
          loading={loading}
          setLimit={setNewLimit}
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
