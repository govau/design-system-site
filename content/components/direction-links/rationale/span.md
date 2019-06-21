---
layout: component/rationale.js
heading: Arrows icons inside span attribute
---

Previous versions of the direction links component added the arrow icon by css in the anchor `<a>` attribute. However this caused the direction arrow to be read out by a screen reader. The arrow icon is a visual cue and not necessary information for a screen reader user. 

Because of this, the arrow icon is now added by `css` inside a `<span>` attribute with an `aria-hidden` attribute set to `true`, this hides the arrow icon from a screen reader. 

