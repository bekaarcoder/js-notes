# React LifeCycle Methods

Every component comes with methods that allow developers to update application state and reflect the changes to the UI before/after key react "events".

There are three main phases:-

1. Mounting
2. Updating
3. Unmounting

## Mounting

### constructor()

Often used for initializing state or binding event handlers to class instance.

```js
class MyConponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
}
```

### render()

After the constructor, React calls render(). It tells react what should be displayed. React updates the DOM to match the object of render().

### componentDidMount()

- This method runs after the component is mounted.
- "Mounting" is the first time the component is rendered to DOM.
- This is a good place to load any data via AJAX or setup subscriptions/timers.
- Calling setState() here will trigger re-render.

## Updating

This is a suitable place to implement any side effect operation.

- syncing up with localStorage.
- auto-saving
- updating DOM for uncontrolled components

### componentDidUpdate()

This method is called after every render occurs. You can do comparison between the previous and current props and state.

## Unmounting

### componentWillUnmount()

This method is invoked immediately before an component is unmounted and detroyed. This is place to do some cleanup like:

- Invalidating timers
- Cancelling network requests
- Removing event handlers directly put on DOM
- Cleaning up subscriptions

> Calling setState() here is useless.
