import "./App.css";
// import { useState } from "react";
import SearchBooks from "./components/SearchBooks";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/search" element={<SearchBooks></SearchBooks>} />
    </Routes>
  );
}

export default App;
