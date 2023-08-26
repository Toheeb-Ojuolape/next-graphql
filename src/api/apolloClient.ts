import { ApolloClient,InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri:"https://api.amboss.space/graphql",
    cache:new InMemoryCache()
})

export default client