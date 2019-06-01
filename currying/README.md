# Currying in JS

Currying is a method of evaluating function with multiple arguments, into a sequence of function with single argument.
In other words, when a function, instead of taking all the arguments at one time, takes the first argument and return a new function that takes the second argument and returns a new function which takes the third argument, and so forth, until all the arguments have been fulfilled.

`We turn a function call add(1, 2, 3) into add(1)(2)(3)`

```js
function curry(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}`);
    }
}

let greet = curry("Hello");
greet("John"); // Hello, John
greet("Abraham"); //Hello, Abraham

curry("Whats Up!")("Dawg"); //Whats Up!, Dawg
```