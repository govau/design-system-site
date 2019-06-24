---
layout: component/rationale.js
heading: Arrows icons inside span attribute
---

Previous versions of the direction links component added the arrow icon as content using the css `:after` selector to the anchor/button tag.
In this example, a screen reader would read:

> "[Link] skip to footer down arrow".

The arrow icon is a visual cue and not necessary information for a screen reader user. 

Because of this, the arrow icon is now added by `css` inside a `<span>` attribute with an `aria-hidden` attribute set to `true`. This prevents the arrow icon from being read by a screen reader. 

