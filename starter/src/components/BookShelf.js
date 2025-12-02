import Book from "./Book";

export default function BookShelf({ title, books }) {
  // TODO: correctly add in book component
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {/*  TODO: add key to each component when looping through*/}
          {books.map((book) => {
            return (
              <li>
                <Book book={book}></Book>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
