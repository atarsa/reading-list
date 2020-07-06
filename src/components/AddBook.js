import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 600px;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  input[type="text"] {
    margin-bottom: 2rem;
    padding: 1rem;
  }
  label {
    color: ${(props) => props.theme.secondaryColor};
    font-weight: 600;
  }
  .button {
    background: ${(props) => props.theme.additionalColor};
    border: none;
    padding: 1rem 2rem;
  }
`;

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { addBook } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBook(title, author);
      setTitle("");
      setAuthor("");
    } else {
      alert("Author and title can't be empty");
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        name="author"
        id="author"
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="Add a Book" className="button" />
    </StyledForm>
  );
};

export default AddBook;
