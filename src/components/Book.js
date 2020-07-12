import React, { useContext } from "react";
import styled from "styled-components";
import { BookContext } from "../contexts/BookContext";
import { ReactComponent as BinIcon } from "../images/recycle-bin.svg";

const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 140px 1fr;
  align-items: middle;
  padding: 1rem;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.primaryLight};

  img {
    width: 115px;
    height: 190px;
    box-shadow: 3px 3px 0px 0px rgba(186, 184, 186, 0.5);
    background: ${(props) => props.theme.primaryColor};
  }

  .info {
    display: grid;
    grid-template-rows: 5rem 7rem 1fr;
  }
  .buttons {
    align-self: end;
    justify-self: end;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  button {
    border: none;
    background: none;
    fill: ${(props) => props.theme.additionalColor};

    :hover {
      cursor: pointer;
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
    setDraggedBook(bookToDrag);
    // set opacity to dragged book
    const target = e.target;
    e.dataTransfer.setData("text", target.id);
    setTimeout(() => {
      target.style.opacity = 0.5;
    }, 0);
  };

  return (
    <Wrapper
      draggable="true"
      id={`drag-book-${book.id}`}
      onDragStart={(e) => drag(e, book)}
      data-bookid={book.id}
    >
      <img src={book.img} alt="book cover" draggable="false" />
      <div className="info">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <div className="buttons">
          <button onClick={() => handleRemove(book)}>
            <BinIcon />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Book;
