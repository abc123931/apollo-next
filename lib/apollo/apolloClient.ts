import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";
import { wsLink } from "lib/apollo/WebSocketLink";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/v1/graphql",
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation !== "subscription"
    );
  },
  httpLink,
  wsLink
);

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "X-Hasura-Admin-Secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache({
    typePolicies: {
      query_root: {
        queryType: true,
      },
      mutation_root: {
        mutationType: true,
      },
      subscription_root: {
        subscriptionType: true,
      },
      User: {
        keyFields: ["login"],
      },
    },
  }),
  connectToDevTools: true,
});
