import { update, get } from "../BooksAPI";
// todo: maybe shelf change functionlity should be added to book as it has the shelf state or to shelf
export default function BookShelfChanger({ selected, bookId }) {
  console.log("default shelf is:", selected);

  function onShelfChange(newShelf) {
    // Should this change both locally and thorugh the api

    // update UI optimistically
    // changeShelf(bookId, newShelf);

    update(bookId, newShelf)
      .then((res) => console.log("API update successful:", res))
      .then(() =>
        get(bookId).then((data) =>
          console.log("is succesful", newShelf === data.shelf)
        )
      );
    // .catch((err) => console.error("API update failed:", err));
  }

  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={selected}
        onChange={(e) => onShelfChange(e.target.value)}
      >
        <option value="moveTo" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}
