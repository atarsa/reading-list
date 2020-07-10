import React, { createContext, useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import { getBookCover } from "../services/books";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const localData = localStorage.getItem("readingList");

  const [books, setBooks] = useState(localData ? JSON.parse(localData) : []);

  const [toRead, setToRead] = useState(filterBooks("to read"));
  const [inProgress, setInProgress] = useState(filterBooks("in progress"));
  const [finished, setFinished] = useState(filterBooks("finished"));
  const [draggedBook, setDraggedBook] = useState({});

  function filterBooks(status) {
    return books.filter((book) => book.status === status);
  }

  function filterAllBooks() {
    setToRead(filterBooks("to read"));
    setInProgress(filterBooks("in progress"));
    setFinished(filterBooks("finished"));
  }

  const addBook = async (title, author, status) => {
    const img = await getBookCover(title, author);
    setBooks([
      ...books,
      {
        title,
        author,
        status,
        img,
        id: uuid(),
      },
    ]);
  };

  const updateBooks = (bookId, status) => {
    setBooks(
      books.map((book) =>
        book.id === bookId ? { ...book, status: status } : book
      )
    );
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("readingList", JSON.stringify(books));
    filterAllBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  return (
    <BookContext.Provider
      value={{
        inProgress,
        toRead,
        finished,
        addBook,
        removeBook,
        draggedBook,
        setDraggedBook,
        updateBooks,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
