---
layout: section
---

## Javascript Usage

```js
AU.animate.Toggle(
	element: document.getElementById('elementId'),
	property: 'height',
	closeSize: 0,
	openSize: 'auto',
	speed: 1000,
	prefunction: function( element, state ) { myPreFunction() },
	postfunction: function( element, state ) { myPreFunction() },
	callback: function( element, state ) { myCallbackFunction() },
);
```
