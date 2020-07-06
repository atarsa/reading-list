import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import styled from "styled-components";

const Wrapper = styled.li`
  display: grid;
  padding: 1rem;
  border: 1px solid green;

  button {
    border: none;
    background: ${(props) => props.theme.primaryColor};
    padding: 0.5rem 2rem;

    :hover {
      cursor: pointer;
      color: #fff;
      background: ${(props) => props.theme.secondaryColor};
    }
  }
`;
const Book = ({ book }) => {
  const { removeBook } = useContext(BookContext);

  const drag = (e) => {
    console.log('drag');
    e.dataTransfer.setData("text/html", e.target.id);
  };

  return (
    <Wrapper
      draggable="true"
      id={`drag-book-${book.id}`}
      onDragStart={(e) => drag(e)}
    >
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>

      <button onClick={() => removeBook(book.id)}>x </button>
    </Wrapper>
  );
};

export default Book;
