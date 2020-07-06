import React, { useContext } from "react";
import styled from "styled-components";
import { BookContext } from "../contexts/BookContext";
import Book from "./Book";

const StyledSection = styled.section`
  border: 1px solid ${(props) => props.theme.additionalColor};
  h2 {
    text-transform: capitalize;
    text-align: center;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
const BookList = ({ list }) => {
  const { books } = useContext(BookContext);
  return (
    <StyledSection>
      <h2>{list}</h2>
      <ul>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </ul>
    </StyledSection>
  );
};

export default BookList;
