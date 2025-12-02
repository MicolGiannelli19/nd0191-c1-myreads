import Book from "./Book";
import BookShelf from "./BookShelf";
import { getAll } from "../BooksAPI";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
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
          <BookShelf title="Currently Reading" books={books}></BookShelf>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((book) => (
                  <li>
                    <Book key={book.id}></Book>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((book) => (
                  <li>
                    <Book key={book.id} book={book}></Book>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"></Link>
      </div>
    </div>
  );
}
