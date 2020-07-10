import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import styled from "styled-components";

const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 140px 1fr;
  align-items: middle;
  padding: 1rem;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.primaryLight};

  img {
    height: 190px;
    box-shadow: 3px 3px 0px 0px rgba(186, 184, 186, 0.5);
  }
  button {
    border: none;
    background: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
    font-weight: 600;
    padding: 0.5rem 2rem;

    :hover {
      cursor: pointer;
      color: #fff;
      background: ${(props) => props.theme.additionalColor};
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
  console.log(book);
  return (
    <Wrapper
      draggable="true"
      id={`drag-book-${book.id}`}
      onDragStart={(e) => drag(e, book)}
      data-bookid={book.id}
    >
      <img src={book.img} alt="book cover" />
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <button onClick={() => handleRemove(book)}>Delete </button>
      </div>
    </Wrapper>
  );
};

export default Book;
