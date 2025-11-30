import "./App.css";
import { useState } from "react";
import Book from "./components/Book";
import SearchBooks from "./components/SearchBooks";
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom"

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <Routes>
      <Route 
      path = "/"
      element = {<Home/>}
      />
      <Route
      path="/search"
      element = {<SearchBooks/>}
      />
    </Routes>
  )

export default App;
