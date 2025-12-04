import Book from "./Book";
import BookShelf from "./BookShelf";
import { getAll } from "../BooksAPI";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]); // maybe this shouldn't be state because it never changes
  // const [shelvedBooks, setShelvedBooks] = useState({});

  useEffect(() => {
    // TODO: check this way of using use effect
    async function fetchBooks() {
      const data = await getAll();

      setBooks(data);

      console.log(books);
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
            books={books.filter((book) => book.shelf === "currentlyReading")}
          ></BookShelf>

          <BookShelf
            key="2"
            title="Read"
            books={books.filter((book) => book.shelf == "read")}
          ></BookShelf>

          <BookShelf
            key="3"
            title="Want to Read"
            books={books.filter((book) => book.shelf == "wantToRead")}
          ></BookShelf>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"></Link>
      </div>
    </div>
  );
}
