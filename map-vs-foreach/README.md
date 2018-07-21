# map vs forEach

- **forEach()** - forEach method does't return anything. It simply calls provided function on each element in the array.

**Example**

let arr = [2, 4, 6, 8];
const returnArr = arr.forEach(num => {
  return num * 2;
});
console.log(returnArr) // undefined

- **map()** - map method also calls the provided function on each element in the array but also returns the new array of the same size.

**Example**

let arr = [2, 4, 6, 8];
const returnArr = arr.map(num => {
  return num * 2;
});
console.log(returnArr) // [4, 8, 12, 16]

**When to use map() and forEach()**

- forEach may be used when we don't want to change the data but to do something with the data such as logging out to the console.
- map may be used if we want to change the data of the array and return a new array. Also we can chain map method with other such as filter and reduce.

[Source](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)