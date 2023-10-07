import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// In order for apollo client to work, we also need to install the `graphql` package
// Eventhough we don't use it explicitly, it uses it under the hood
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
