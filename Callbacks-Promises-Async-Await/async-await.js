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

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title} - ${post.body}</li>`;
    });
    document.querySelector("#posts").innerHTML = output;
  }, 1000);
}

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

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  let users = "";
  data.forEach(user => {
    users += `<li>${user.name}</li>`;
  });
  document.querySelector("#users").innerHTML = users;
}

init();

getUsers();
