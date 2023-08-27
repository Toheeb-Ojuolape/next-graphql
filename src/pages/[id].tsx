import { useState } from "react";
import ChannelList from "@/components/ChannelList/ChannelList";
import { Channels } from "@/interfaces/Channel";
import axios from "axios";
import { GetServerSideProps } from "next";
import { ApiProps } from "@/interfaces/ApiProps";
import { useRouter } from "next/router";
import { textFormatter } from "@/utils/textFormatter";
import ErrorComponent from "@/components/ErrorComponent/ErrorComponent";
import { useEffect } from "react";

export const getServerSideProps: GetServerSideProps<ApiProps> = async (
  context
) => {
  const { id, limit, direction, sortBy } = context.query;
  let isLoading = true;

  const defaultLimit = limit ? limit : 50;
  const defaultDirection = direction ? direction : "ASC";
  const defaultSortBy = sortBy ? sortBy : "capacity";

  try {
    const response = await axios({
      method: "GET",
      url:
        "http://localhost:3000/api/graphql?pubkey=" +
        id +
        "&limit=" +
        defaultLimit +
        "&direction=" +
        defaultDirection +
        "&sortBy=" +
        defaultSortBy,
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
  const [loading,setLoading] = useState(false)


  const setNewDirection = (e:string) =>{
    setLoading(true)
    setDirection(e)
  }

  const setNewSortBy = (e:string) =>{
    setLoading(true)
    setSortBy(e)
  }

  useEffect(() => {
    if (page !== 1) {
      console.log("Change in pagination");
    }
    if (sortBy !== "") {
      if (router.query.sortBy) {
        router.replace({
          pathname:router.pathname,
          query:{ ...router.query,sortBy:sortBy }
        }).then(()=>{
          setLoading(false)
        }).catch((error)=>{
          setLoading(false)
        })
      } else {
        router.push({
          pathname: router.asPath,
          query: { sortBy:sortBy },
        });
      }
    }
    if (direction !== "") {
      if (router.query.direction) {
        router.replace({
          pathname:router.pathname,
          query:{ ...router.query,sortBy:sortBy }
        }).then((response)=>{
          console.log(response)
          setLoading(false)
        }).catch((error)=>{
          setLoading(false)
        })
      } else {
        router.push({
          pathname: router.asPath,
          query: { direction: direction },
        });
      }
    }
  }, [page, sortBy, direction]);

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
          setPage={setPage}
          loading={loading}
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
