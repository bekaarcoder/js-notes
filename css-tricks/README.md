# CSS Tricks

1. **Centering child element horizontally and vertically using css**

    We can user **transform translate** property of css to center elements.

    **HTML**
    ```html
    <div class="container">
      <div class="child">  
      </div>
    </div>
    ```
    **CSS**
    ```css
    .container {
      width: 500px;
      height: 500px;
      position: absolute;
      border: 1px solid #ccc;
    }

    .child {
      width: 300px;
      height: 300px;
      border: 2px solid;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
    }
    ```