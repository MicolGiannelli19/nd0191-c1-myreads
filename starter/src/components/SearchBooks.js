// This is my search books view
// import Book from "./Book";
import { Link } from "react-router-dom";
import TestApi from "./TestApi";
import { useEffect, useState } from "react";
import Book from "./Book";
import { search } from "../BooksAPI";

export default function SearchBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    search().then((data) => console.log("books", data));
  }, []);

  return (
    <div className="search-books">
      <Link className="close-search" to="/">
        {" "}
        Back to home{" "}
      </Link>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title, author, or ISBN" />
      </div>
      <div className="search-books-bar"></div>
      <div className="search-books-results">
        <ol className="books-grid">
          <li>
            {books.map((book) => (
              <li>
                <Book key={books.id} book={book}></Book>
              </li>
            ))}
          </li>
        </ol>
      </div>
    </div>
  );
}
