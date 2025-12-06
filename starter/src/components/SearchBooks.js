// This is my search books view
// import Book from "./Book";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Book from "./Book";
import { search } from "../BooksAPI";

export default function SearchBooks() {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue) {
      search(searchValue)
        .then((res) => {
          if (res.error || !Array.isArray(res)) {
            console.log("error response", res);
            setBooks([]);
            return;
          }
          console.log("successfult response", books);
          setBooks(res);
        })
        .catch((err) => {
          console.error("Search failed", err);
          setBooks([]);
        });
    } else {
      setBooks([]);
    }
  }, [searchValue]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/"></Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={books.id}>
              <Book book={book}></Book>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
