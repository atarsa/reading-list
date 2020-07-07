import React, { createContext, useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      title: "name of the wind",
      author: "Sanderson",
      status: "to read",
      id: uuid(),
    },
    {
      title: "the way of kings",
      author: "Sanderson",
      status: "to read",
      id: uuid(),
    },
    {
      title: "the final empire",
      author: "Sanderson",
      status: "in progress",
      id: uuid(),
    },
    {
      title: "the hero of ages",
      author: "Sanderson",
      status: "finished",
      id: uuid(),
    },
  ]);

  const [toRead, setToRead] = useState(filterBooks("to read"));
  const [inProgress, setInProgress] = useState(filterBooks("in progress"));
  const [finished, setFinished] = useState(filterBooks("finished"));
  const [draggedBook, setDraggedBook] = useState({});

  function filterBooks(status) {
    return books.filter((book) => book.status === status);
  }

  const addBook = (title, author, status) => {
    setBooks([
      ...books,
      {
        title,
        author,
        status,
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

    setToRead(filterBooks("to read"));
    setInProgress(filterBooks("in progress"));
    setFinished(filterBooks("finished"));
  };

  const removeBook = (id) => {
    console.log("remove book", id);
    setBooks(books.filter((book) => book.id !== id));
  };

  // useEffect(() => {
  //   // setToRead(filterBooks("to read"));
  //   // setInProgress(filterBooks("in progress"));
  //   // setFinished(filterBooks("finished"));
  //   // eslint-disable-next-line
  // }, [books]);

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
