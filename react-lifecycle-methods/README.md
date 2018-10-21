# React LifeCycle Methods

constructor()

~~componentWillMount()~~ -> componentDidMount()

render()

componentDidMount()

~~componentWillReceiveProps()~~ -> getDerivedStateFromProps()

shouldComponentUpdate()

~~componentWillUpdate()~~ -> componentDidUpdate

componentDidUpdate()

componentWillUnmount()

componentDidCatch()

**componentWillMount(), componentWillReceiveProps() and componentWillUpdate()** are deprecated in React 16.3.