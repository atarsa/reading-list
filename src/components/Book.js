import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import styled from "styled-components";

const Wrapper = styled.li`
  display: grid;
  padding: 1rem;

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
  return (
    <Wrapper>
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>

      <button onClick={() => removeBook(book.id)}>x </button>
    </Wrapper>
  );
};

export default Book;
