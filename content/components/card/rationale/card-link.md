---
layout: component/rationale.js
heading: Cards as links
---

A common pattern is to wrap the entire contents of a card inside an anchor tag. For example, a card that is a preview to an article or blog post often contains an image, title of the article and some preview text.
E.g.

```html
<a class="au-card" href="/article-1">
    <img />
    <h2></h2>
    <p></p>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</a>
```

 Having an anchor tag wrapping these contents has the benefit of having a large click area. A user is able to click anywhere in this card and view the full article or blog post.

However this can cause difficulties for screen readers. When a screen reader user focuses on this anchor tag, the _entire_ contents of the card are read out. This can be a frustrating experience, particularly when there is a lot of content inside the cards. Furthermore when there is a large amount of cards (wrapped by anchors) on a single page, the `links` landmark menu of screen readers can get extremely convoluted. 

Given this, the alternative is to have a single anchor tag inside the card, and have the hit area of this anchor tag wrap the card. This approach yields the benefits of having a large click area, but avoids issues for screen readers.
