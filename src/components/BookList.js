import React, { useContext } from "react";
import styled from "styled-components";
import { BookContext } from "../contexts/BookContext";
import Book from "./Book";

const StyledSection = styled.section`
  background: ${(props) => props.theme.primaryLight};
  margin-bottom: 2rem;
  
  .list-head {
    background: ${(props) => props.theme.primaryColor};
    padding: 0.2rem;
  }
  h2 {
    text-transform: capitalize;
    text-align: center;
  }
  .list-body {
    
    height: 100%;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 1rem;
  }
`;
const BookList = ({ list }) => {
  const { toRead, inProgress, finished, updateBooks, draggedBook } = useContext(
    BookContext
  );

  const drop = (e) => {
    e.preventDefault();
    // update moved book status to the new one
    // update book lists
    updateBooks(draggedBook.id, list);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

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

  const booksToShow =
    books.length !== 0 ? (
      books.map((book) => <Book book={book} key={book.id} />)
    ) : (
      <p>List is empty!</p>
    );
  return (
    <StyledSection>
      <div className="list-head">
        <h2>{list}</h2>
      </div>

      <div onDrop={drop} onDragOver={allowDrop} className="list-body">
        <ul>{booksToShow}</ul>
      </div>
    </StyledSection>
  );
};

export default BookList;
