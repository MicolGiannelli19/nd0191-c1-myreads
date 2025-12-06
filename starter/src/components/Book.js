// TODO: of basic component strucutre

import BookShelfChanger from "./BookShelfChanger";

export default function Book({ book }) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
          }}
        ></div>
        <BookShelfChanger
          selected={book.shelf}
          bookId={book.id}
        ></BookShelfChanger>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors?.join(", ")}</div>
    </div>
  );
}
