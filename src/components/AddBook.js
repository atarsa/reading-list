import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 600px;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  input[type="text"],
  select {
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
  const [status, setStatus] = useState("to read");
  const { addBook } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author, status);
    // TODO show success message
    // TODO hide form
    setTitle("");
    setAuthor("");
    setStatus("to read");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="author">Author:</label>
      <input
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
  );
};

export default AddBook;
