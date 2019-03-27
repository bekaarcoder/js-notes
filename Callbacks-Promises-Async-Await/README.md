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
``