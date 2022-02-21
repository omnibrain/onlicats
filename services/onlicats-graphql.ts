import { ApolloClient, InMemoryCache } from "@apollo/client";

export const onlicatsGraphql = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});
