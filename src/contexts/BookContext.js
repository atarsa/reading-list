import React, { createContext, useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      title: "name of the wind",
      author: "Sanderson",
      status: "to read",
      id: 1,
    },
    {
      title: "the way of kings",
      author: "Sanderson",
      status: "to read",
      id: 2,
    },
    {
      title: "the final empire",
      author: "Sanderson",
      status: "in progress",
      id: 3,
    },
    {
      title: "the hero of ages",
      author: "Sanderson",
      status: "finished",
      id: 4,
    },
  ]);

  const [toRead, setToRead] = useState(filterBooks("to read"));
  const [inProgress, setInProgress] = useState(filterBooks("in progress"));
  const [finished, setFinished] = useState(filterBooks("finished"));

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

  const removeBook = (id) => setBooks(books.filter((book) => book.id !== id));

  useEffect(() => {
    setToRead(filterBooks("to read"));
    setInProgress(filterBooks("in progress"));
    setFinished(filterBooks("finished"));
    // eslint-disable-next-line
  }, [books]);

  return (
    <BookContext.Provider
      value={{ toRead, inProgress, finished, addBook, removeBook }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
