import { useEffect } from "react";
import { get, getAll, search, update } from "../BooksAPI";

function TestApi() {
  useEffect(() => {
    console.log("UseEffect running");
    // I want to call this on the main page for each book I want to extract the shelves and
    getAll().then((books) => console.log("Books: ", books));

    console.log("Running Search Query");
    search("a").then((result) => console.log(result));
  }, []);

  return <div>TEST API component</div>;
}

export default TestApi;
