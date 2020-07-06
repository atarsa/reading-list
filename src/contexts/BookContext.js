import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "Sanderson", id: 1 },
    { title: "the way of kings", author: "Sanderson", id: 2 },
    { title: "the final empire", author: "Sanderson", id: 3 },
    { title: "the hero of ages", author: "Sanderson", id: 4 },
  ]);

  const addBook = (title, author) =>
    setBooks([
      ...books,
      {
        title,
        author,
        id: uuid(),
      },
    ]);

  const removeBook = (id) => setBooks(books.filter((book) => book.id !== id));

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
