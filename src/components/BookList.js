import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { BookContext } from "../contexts/BookContext";
import Book from "./Book";

const StyledSection = styled.section`
  border: 1px solid ${(props) => props.theme.additionalColor};
  h2 {
    text-transform: capitalize;
    text-align: center;
  }
  div {
    height: 100%;
    background: pink;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
const BookList = ({ list, listId }) => {
  const { updateBookStatus, toRead, inProgress, finished } = useContext(
    BookContext
  );

  const dropTarget = document.getElementById(listId);

  //  drag and drop usage https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
  const drop = (ev, el) => {
    ev.preventDefault();
    console.log("drop target element", el);
    const data = ev.dataTransfer.getData("text");
    const movedBook = document.getElementById(data);
    movedBook.style.display = "block";

    // update moved book
    // get book id

    console.log("moved book", movedBook);
    const bookId = movedBook.dataset.bookid;
    // updateBookStatus(bookId, listId);
    el.appendChild(document.getElementById(data));
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  console.log("list id", listId);
  console.log(dropTarget);
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
      <div
        onDrop={(e) => {
          console.log(dropTarget);
          drop(e, dropTarget);
        }}
        onDragOver={allowDrop}
        id={listId}
      >
        <ul>
          {books.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </ul>
      </div>
    </StyledSection>
  );
};

export default BookList;
