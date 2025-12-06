// This is my search books view
// import Book from "./Book";
import { Link } from "react-router-dom";
import TestApi from "./TestApi";
import { useEffect, useState } from "react";
import Book from "./Book";
import { search } from "../BooksAPI";

export default function SearchBooks() {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue) {
      search(searchValue).then((data) => setBooks(data));
    } else {
      console.log("Search Value is empty");
    }
  }, [searchValue]);

  return (
    <div className="search-books">
      <Link className="close-search" to="/">
        {" "}
        Back to home{" "}
      </Link>

      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className="search-books-bar"></div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <li>
              <Book key={books.id} book={book}></Book>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
