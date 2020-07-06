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
  const { toRead, inProgress, finished } = useContext(BookContext);

  let books = [];
  switch (list) {
    case "to read":
      books = toRead;
      break;
    case "in progress":
      books = inProgress;
      break;
    case "finished":
      books = finished;
      break;
    default:
      books = [];
      console.log("Book List is empty");
  }
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
