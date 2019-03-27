# Callback, Promises And Async-Await

### Callback
A callback is a function that is to be executed after another function has finished executing.
**Callback Function** - Any function that is passed as an argument.
**Higher-order-functions** - In JS, functions are objects. So, functions can take function as an argument and can be returned by other functions. Functions that can do this are called higher-order-functions.

**Creating a Callback**

```js
const posts = [
  {
    title: "Post One",
    body: "This is post one."
  },
  {
    title: "Post Two",
    body: "This is post two."
  }
];

// getPosts function will fetch all the posts in the array and display it to the DOM.
// Callback function
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title} - ${post.body}</li>`;
    });
    document.querySelector("#posts").innerHTML = output;
  }, 1000);
}

// createPost will add a new post to the array
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// Passing the getPosts function as an argumemt
createPost({ title: "Post Three", body: "This is post three" }, getPosts);
```

### Promise
Promise in JavaScript are a way to handle async calls.
A Promise consists of two parts:-
1. The first part creates the Promise and defines the conditions of what is considered `successful` and `unsuccessful`.
2. The second part describes what to do when `successful` condition is met with the `resolve()` function, and what to do when `unsuccessful` condition is met with the `reject()` function.

**Declaring a Promise**

```js
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something wrong occurs.");
      }
    }, 2000);
  });
}

createPost({ title: "Post Three", body: "This is post three" })
    .then(getPosts)
    .catch(error => console.log(error));
```

> The arguments from the `resolve()` function are meant for the `.then()` function.
> The arguments from the `reject()` function are meant for the `.catch()` function.

### Async-Await
Async/Await is a new way to write asynchronous code. It is built on top of promises, therefor, it is also non-blocking.

> **Callback Hell** - The situation where the callbacks are nested within other callbacks several level deep, potentially making it difficult to understand and maintain the code.

Async functions are created by prepending the word **async** before the function declaration.
`async function asyncFn() {}`
Asynchronous function can be paused with **await**, the keywork that can only be used inside an async function. Await returns whatever the async function returns when it is done.

```js
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something wrong occurs.");
      }
    }, 2000);
  });
}

async function init() {
  await createPost({ title: "Post Three", body: "This is post three" });
  getPosts();
}
```