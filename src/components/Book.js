import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BookContext } from "../contexts/BookContext";
import { ReactComponent as BinIcon } from "../images/recycle-bin.svg";
import StyledModal from "../styles/StyledModal";

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

const StyledDiv = styled.div`
  background: #eee;
  color: #333;
  padding: 5rem;
  margin: 1rem;
  border-radius: 3px;

  p {
    margin-bottom: 4rem;
  }
  .book-title {
    font-weight: 600;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
  .btn {
    padding: 1rem 2rem;
    border: 1px solid #333;
    cursor: pointer;
    width: 100%;
    border-radius: 2px;
  }

  .btn__remove {
    margin-right: 2rem;

    :hover {
      background: ${(props) => props.theme.additionalColor};
      border: none;
      color: #eee;
    }
  }
  .btn__cancel:hover {
    background: ${(props) => props.theme.primaryColor};
    border: none;
    color: #eee;
  }
`;

const Book = ({ book }) => {
  const { removeBook, setDraggedBook } = useContext(BookContext);
  const [isOpen, setIsOpen] = useState(false);

  const showOrHide = () => {
    setIsOpen(!isOpen);
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
    <>
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
            <button onClick={showOrHide}>
              <BinIcon />
            </button>
          </div>
        </div>

        <StyledModal isOpen={isOpen} onRequestClose={showOrHide}>
          <StyledDiv>
            <p>
              You are about to remove:{" "}
              <q className="book-title">{book.title}</q> from your list.
              <br />
              Do you wish to continue?
            </p>
            <div className="buttons">
              <button
                className="btn btn__remove"
                onClick={() => removeBook(book.id)}
              >
                Delete
              </button>
              <button className="btn btn__cancel" onClick={showOrHide}>
                Cancel
              </button>
            </div>
          </StyledDiv>
        </StyledModal>
      </Wrapper>
    </>
  );
};

export default Book;
