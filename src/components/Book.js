import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import styled from "styled-components";

const Wrapper = styled.li`
  display: grid;
  padding: 1rem;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.primaryLight};

  button {
    border: none;
    background: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.additionalColor};
    font-weight: 600;
    padding: 0.5rem 2rem;

    :hover {
      cursor: pointer;
      color: #fff;
      background: ${(props) => props.theme.primaryColor};
    }
  }
`;
const Book = ({ book }) => {
  const { removeBook, setDraggedBook } = useContext(BookContext);

  const handleRemove = (book) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (confirmation) {
      removeBook(book.id);
    }
  };
  const drag = (e, bookToDrag) => {
    console.log("drag");
    setDraggedBook(bookToDrag);
    // const target = e.target;
    // e.dataTransfer.setData("text", target.id);
    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
  };

  return (
    <Wrapper
      draggable="true"
      id={`drag-book-${book.id}`}
      onDragStart={(e) => drag(e, book)}
      data-bookid={book.id}
    >
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>

      <button onClick={() => handleRemove(book)}>Delete </button>
    </Wrapper>
  );
};

export default Book;
