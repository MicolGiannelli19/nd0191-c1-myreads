import Book from "./Book";
import BookShelf from "./BookShelf";
import { getAll } from "../BooksAPI";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]); // maybe this shouldn't be state because it never changes
  // const [shelvedBooks, setShelvedBooks] = useState({});

  function ChangeShelf(bookId, newShelf) {
    setBooks(
      books.map((book) => {
        return book.id === bookId ? { ...book, shelf: newShelf } : book;
      })
    );
  }

  useEffect(() => {
    // TODO: check this way of using use effect
    // TODO: check my use of async funciton
    async function fetchBooks() {
      const data = await getAll();

      setBooks(data);
    }

    fetchBooks();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <BookShelf
            key="1"
            title="Currently Reading"
            books={books.filter((b) => b.shelf === "currentlyReading")}
            changeShelf={ChangeShelf}
          ></BookShelf>

          <BookShelf
            key="2"
            title="Read"
            books={books.filter((b) => b.shelf === "read")}
            changeShelf={ChangeShelf}
          ></BookShelf>

          <BookShelf
            key="3"
            title="Want to Read"
            books={books.filter((b) => b.shelf === "wantToRead")}
            changeShelf={ChangeShelf}
          ></BookShelf>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"></Link>
      </div>
    </div>
  );
}
