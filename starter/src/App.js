import "./App.css";
import { useState } from "react";
import Book from "./components/Book";
import SearchBooks from "./components/SearchBooks";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks></SearchBooks>
      ) : (
  );
}

export default App;
