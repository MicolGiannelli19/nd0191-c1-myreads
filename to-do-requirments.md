# This page specifies the requiremnets of the projcet

1. https://learn.udacity.com/nd019?version=10.0.5&partKey=cd0546&lessonKey=179dc4cc-c9bc-4450-97c7-92465c7be351&project=rubric

1. Handle basic routing and set all the views I need
1. Devide the page in components

~~1. Solve import this error:~~ 2. Find a way to have column passed down to object
Solve git issue

# Notes

React component lifecycle

## Asyncrounrounous functions js

Concepts:

1. A `Promise` rappresnets a value that may not yet exists that will resolve in the future
2. The promise is an object that may not already exist so we can handle it with `then`
   code example:

```js
fetch("https://reactnd-books-api.udacity.com/books", {
  headers: { Accept: "application/json" },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

3. !!IMPORTANT you cannot make useffects main function asycrounous

JavaScript operates in a single-threaded environment, meaning only one piece of code runs at a time

The event loop ensures that tasks are executed in the correct order, enabling asynchronous programming.

understanding the js event loop
https://medium.com/@ignatovich.dm/the-javascript-event-loop-explained-with-examples-d8f7ddf0861d

note when handling nested json you can use the following optional chaining states

```js
data.user?.address?.city;
```

note you should be comtarble with this syntax please review

```js
setUser((prev) => ({ ...prev, age: 31 }));
```

WARNING: AVOID PROP CLUTTER LIKE THIS PASS IN OBJECT DIRECTLY
TODO: fix put request

```jsx
<Book
  name={book.name}
  author={book.author}
  price={book.price}
  rating={book.rating}
  image={book.image}
/>
```

### UseEffect notes

- Use effect with no parameter for our dependecies runs every time the component renders
