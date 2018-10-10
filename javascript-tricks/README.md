# JavaScript Tricks

1. **Copy an array to another array without changing the object reference**

  - Using **arr.splice()** method - We can copy an arrar to another array without changing the main array using the splice() method in javascript.

  ```javascript
  let arr1 = ["rick", "morty", "john", "jane"];
  let arr2 = arr1.split(0);
  ```

  - Using **JSON.parse() & JSON.stringify()** methods.

  ```javascript
  let arr1 = ["rick", "morty", "john", "jane"];
  let arr2 = JSON.parse(JSON.stringify(arr1));
  ```

2. 