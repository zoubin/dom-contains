# dom-contains
Determines whether or not one HTMLElement is or contains another HTMLElement.

This is a commonjs wrapper for [Y.DOM.contains](http://yuilibrary.com/yui/docs/api/classes/DOM.html#method_contains).

```javascript
var contains = require('dom-contains');
```

## contains(element, needle)

Return a boolean.

Whether or not the `element` is or contains the `needle`.

### element

Type: `HTMLElement`

The containing html element.

### needle

Type: `HTMLElement`

The html element that may be contained.

