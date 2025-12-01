import { useEffect } from "react";
import { get, getAll, search, update } from "../BooksAPI";

function TestApi() {
  useEffect(() => {
    console.log("UseEffect running");

    const getAllResponse = getAll(); // TODO: Set up correct sytax for asyncrinous api call
    console.log(getAllResponse);
  }, []);

  return <div>TEST API component</div>;
}

export default TestApi;
