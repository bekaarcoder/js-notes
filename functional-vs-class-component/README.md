# Functional Component Vs Class Component

**Functional Component**

- Used for presenting static data.
- Can't handle fetching data.
- Easy to write.

```javascript
const Header = () => {
  return (
    <Text>Hi There!</Text>
  )
}
```


**Class Component**

- Used for dynamic sources of data.
- Handles any data that might change (fetching data, user events, etc.).
- Knows when it gets rendered to the device (userful for data fetching).
- More code to write.

```javascript
class Header extends Component {
  render() {
    return (
      <Text>Hi There!</Text>
    )
  }
}
```
