import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import styled from "styled-components";
import StyledModal from "../styles/StyledModal";

const StyledForm = styled.form`
  width: 600px;
  padding: 2rem;
  margin: 3rem auto;
  display: grid;
  background: #eee;

  input[type="text"],
  select {
    margin-bottom: 2rem;
    padding: 1rem;
  }
  label {
    color: #052340;
    font-weight: 600;
  }
  .button {
    background: #052340;
    color: #d5ac4e;
    border: none;
    padding: 1rem 2rem;
    font-weight: 700;
    cursor: pointer;

    :hover {
      color: #fff;
      background: ${(props) => props.theme.additionalColor};
    }
  }

  .button--close {
    justify-self: end;
  }
`;

const StyledBtn = styled.button`
  padding: 1rem 2rem;
  margin: 2rem;
  background: ${(props) => props.theme.primaryColor};
  border: none;
  color: ${(props) => props.theme.secondaryColor};
  font-weight: 700;
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme.additionalColor};
    color: #fff;
  }
`;

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("to read");
  const [isOpen, setIsOpen] = useState(false);
  const { addBook } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author, status);
    showOrHide();
    setTitle("");
    setAuthor("");
    setStatus("to read");
  };

  const showOrHide = () => {
    setIsOpen(!isOpen);
    const rootDiv = document.querySelector("#root");
    rootDiv.classList.toggle("blur");
  };

  return (
    <div>
      <StyledBtn onClick={showOrHide}> Add a book</StyledBtn>
      <StyledModal
        isOpen={isOpen}
        onRequestClose={showOrHide}
        appElement={document.querySelector("#root")}
      >
        <StyledForm onSubmit={handleSubmit}>
          <button
            className="button button--close"
            aria-label="Close"
            onClick={showOrHide}
          >
            X
          </button>
          <label htmlFor="title">Title:</label>
          <input
            key="book-title"
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <label htmlFor="author">Author:</label>
          <input
            key="book-author"
            type="text"
            name="author"
            id="author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <label htmlFor="status">Reading status:</label>
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="to read">To Read</option>
            <option value="in progress">In Progress</option>
            <option value="finished">Finished</option>
          </select>

          <input type="submit" value="Add a Book" className="button" />
        </StyledForm>
      </StyledModal>
    </div>
  );
};

export default AddBook;
