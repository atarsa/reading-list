import React, { useContext, useEffect } from "react";
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
  const { toRead, inProgress, finished } = useContext(BookContext);

  const drop = (ev, el) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/html");
    // console.log("drop", data);
    el.appendChild(document.getElementById(data));
  };

  const allowDrop = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
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
  const dropTarget = document.getElementById(listId);
  // console.log("el", el);
  return (
    <StyledSection>
      <h2>{list}</h2>
      <div
        onDrop={(e) => {
          drop(e, dropTarget);
        }}
        onDragOver={(e) => allowDrop(e)}
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
