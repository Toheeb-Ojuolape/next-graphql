import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import ChannelList from "@/components/ChannelList";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_APP_API_URL,
  }),
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Channel List</h1>
        <ChannelList />
      </div>
    </ApolloProvider>
  );
}
