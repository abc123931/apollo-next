import type { FetchResult, Operation } from "@apollo/client/core";
import { ApolloLink, Observable } from "@apollo/client/core";
import type { GraphQLError } from "graphql";
import { print } from "graphql";
import type { Client } from "graphql-ws";
import { createClient } from "graphql-ws";

class WebSocketLink extends ApolloLink {
  private client: Client;

  constructor(client: Client) {
    super();
    this.client = client;
  }

  public request(operation: Operation): Observable<FetchResult> {
    return new Observable((sink) =>
      this.client.subscribe<FetchResult>(
        { ...operation, query: print(operation.query) },
        {
          next: sink.next.bind(sink),
          complete: sink.complete.bind(sink),
          error: (err) => {
            if (err instanceof Error) {
              return sink.error(err);
            }

            if (err instanceof CloseEvent) {
              return sink.error(
                // reason will be available on clean closes
                new Error(
                  `Socket closed with event ${err.code} ${err.reason || ""}`
                )
              );
            }

            return sink.error(
              new Error(
                (err as GraphQLError[]).map(({ message }) => message).join(", ")
              )
            );
          },
        }
      )
    );
  }
}

export const wsClient =
  typeof window !== "undefined"
    ? createClient({
        url: "ws://localhost:8080/v1/graphql",
        lazy: true,
        connectionParams: async () => {
          return {
            headers: {
              "Sec-WebSocket-Protocol": "graphql-ws",
              "X-Hasura-Admin-Secret":
                process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
            },
          };
        },
      })
    : undefined;

export const wsLink =
  typeof window !== "undefined" && wsClient
    ? new WebSocketLink(wsClient)
    : undefined;
