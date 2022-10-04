import React from "react";
import CreateUser from "./components/CreateUser";
import ListOfUsers from "./components/ListOfUsers";
import UpdatePassword from "./components/UpdatePassword";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import "./App.css";


function App() {
  
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <CreateUser />
      <ListOfUsers />
      <UpdatePassword />
    </ApolloProvider>
  );
}

export default App;
