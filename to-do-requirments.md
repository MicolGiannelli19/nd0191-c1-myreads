# This page specifies the requiremnets of the projcet

1. https://learn.udacity.com/nd019?version=10.0.5&partKey=cd0546&lessonKey=179dc4cc-c9bc-4450-97c7-92465c7be351&project=rubric

1. Handle basic routing and set all the views I need
1. Devide the page in components

1. Solve this error:

```
ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more
```

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
