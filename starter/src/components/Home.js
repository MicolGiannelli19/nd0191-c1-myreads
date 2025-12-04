import Book from "./Book";
import BookShelf from "./BookShelf";
import { getAll } from "../BooksAPI";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]); // maybe this shouldn't be state because it never changes
  const [shelvedBooks, setShelvedBooks] = useState({});

  useEffect(() => {
    // TODO: check this way of using use effect
    async function fetchBooks() {
      const data = await getAll();
      return data;
    }

    const books = fetchBooks();

    const shelevedBooks_example = books.reduce((map, book) => {
      if (!map.has(book.shelf)) map.set(book.shelf, []);
      map.get(book.shelf).push(book);
      return map;
    }, {}); // this should be the state

    setShelvedBooks(shelevedBooks_example);
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          {Array.from(shelvedBooks.entries()).map(([key, value]) => (
            <BookShelf key={key} books={value} title={key} />
          ))}

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
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
