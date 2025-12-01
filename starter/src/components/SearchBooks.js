// This is my search books view
// import Book from "./Book";
import { Link } from "react-router-dom";

export default function SearchBooks() {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/"> Back to home </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
}
