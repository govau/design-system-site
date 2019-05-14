---
layout: component/rationale.js
heading: Alternating rows
---

For a data table with large amounts of rows, highlighting alternating rows helps [increase readability and scanning speed](http://alistapart.com/article/zebrastripingmoredataforthecase/). We've chosen for the bottom row to be highlighted using the `nth-last-child(odd)` selector, since this 'visually completes' the table. 
