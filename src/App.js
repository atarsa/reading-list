import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

import Layout from "./layout/Layout";
import BookContextProvider from "./contexts/BookContext";
import Header from "./components/Header";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import { ReactComponent as Ilustration } from "./images/undraw_book_lover_mkck.svg";

const BookListWrapper = styled.div`
  margin: 2rem;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repat(minmax(300px, max-content), auto);
  grid-gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Container = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 5rem auto 0;
`;

const StyledIlustration = styled(Ilustration)`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    display: block;
    position: absolute;
    top: 3.5rem;
    right: 2rem;
    z-index: 0;
    width: 280px;
    height: 280px;
  }
`;
function App() {
  Modal.setAppElement("#root");

  return (
    <Layout>
      <BookContextProvider>
        <Header />
        <StyledIlustration />
        <Container>
          <AddBook />
          <BookListWrapper>
            <BookList list="to read" listId="toRead" />
            <BookList list="in progress" listId="inProgress" />
            <BookList list="finished" listId="finished" />
          </BookListWrapper>
        </Container>
      </BookContextProvider>
    </Layout>
  );
}

export default App;
