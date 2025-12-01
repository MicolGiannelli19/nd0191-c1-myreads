import { useEffect } from "react";
import { get, getAll, search, update } from "../BooksAPI";

function TestApi() {
  useEffect(() => {
    console.log("UseEffect running");
    getAll().then((books) => console.log("Books: ", books));

    console.log("Running Search Query");
    search("a").then((result) => console.log(result));
  }, []);

  return <div>TEST API component</div>;
}

export default TestApi;
