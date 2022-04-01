import { ApolloClient, ApolloProvider as Provider, InMemoryCache } from "@apollo/client";
import { FC } from "react";
import { IApolloProviderProps } from "./apollo-provider.props";
import { URL_API_GRAPHQL } from "utils/constants/api";

const client = new ApolloClient({
  uri: URL_API_GRAPHQL,
  cache: new InMemoryCache(),
});

export const ApolloProvider: FC<IApolloProviderProps> = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};
