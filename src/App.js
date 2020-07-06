import React from "react";
import styled from "styled-components";

import Layout from "./layout/Layout";
import BookContextProvider from "./contexts/BookContext";
import Header from "./components/Header";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

const BookListWrapper = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
function App() {
  return (
    <Layout>
      <BookContextProvider>
        <Header />
        <AddBook />
        <BookListWrapper>
          <BookList list="to read" listId="toRead" />
          <BookList list="in progress" listId="inProgress" />
          <BookList list="finished" listId="finished" />
        </BookListWrapper>
      </BookContextProvider>
    </Layout>
  );
}

export default App;
