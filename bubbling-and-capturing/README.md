# Bubbling And Capturing

### Event Bubbling
When an event happens on an element, it first runs the handler on it, then on its parent, then all the way up on other ancestors.

```html
<form onclick="alert('form')">
    <div onclick="alert('div')">
        <p onclick="alert('p')">Paragraph</p>
    </div>
</form>
```

If we click on the `<p>` tag then `onclick` first run on `<p>`, then on `<div>`, and finally on `<form>`.

We will see three alerts: `p -> div -> form`

### Event Capturing
Capturing is another phase of event processing. The standard DOM events describes 3 phases of event propagation:
1. **Capturing Phase** - the event goes down to the element.
2. **Target Phase** - the event reached the target element.
3. **Bubbling Phase** - the event bubbles up from the element.

![Capturing-Bubbling-EventFlow](eventflow.png)

> That is: for a click on <td> the event first goes through the ancestors chain down to the element (capturing), then it reaches the target, and then it goes up (bubbles), calling handlers on its way.