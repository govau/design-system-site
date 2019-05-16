---
layout: component/rationale.js
heading: Striping alternate rows
---

For a data table with large amounts of rows, highlighting alternate rows helps [increase readability and scanning speed](http://alistapart.com/article/zebrastripingmoredataforthecase/). We've elected to highlight the bottom row using the `nth-last-child(odd)` selector to provide the table with visual completeness. 

For tables that have fewer amount of rows, using the striped version of the table component can cause confusion because users may attribute meaning to the highlighted row.
