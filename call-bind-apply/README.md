# call() vs bind() vs apply()

### Call
Call method invokes the function and allows you to pass in arguments one by one using commas.

```js
let customer = { name: "John", email: "john@email.com" };

function greeting(text, text2) {
    console.log(`${text} ${this.name}, ${text2}`);
}

greeting.call(customer, 'Hello', 'how are you?'); //Hello John, how are you?
```

### Apply
Apply method invokes the function and allows you to pass in arguments as an array.

```js
let customer = { name: "John", email: "john@email.com" };

function greeting(text, text2) {
    console.log(`${text} ${this.name}, ${text2}`);
}

greeting.apply(customer, ['Hello', 'how are you?']); //Hello John, how are you?
```

### Bind
Bind method returns a new function, allowing you to pass in a this array and any number of arguments. Bind is used when we want that function to be called later with a certain context like events.

```js
let customer = { name: "John", email: "john@email.com" };

function greeting(text, text2) {
    console.log(`${text} ${this.name}, ${text2}`);
}

let greet = greeting.bind(customer);
greet('Hello', 'how are you?'); //Hello John, how are you?
```