---
layout: component/rationale.js
heading: Additional Attributes
---

Given the open-ended nature of input expected in a search query, several additional `input` attributes should be considered to ensure browsers' behaviours are tailored for search queries.

Enabling the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute may risk the unintended exposure of sensitive queries for subsequent uses of the search form, especially where a browser may be in a shared environment.

The [`autocorrect`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocorrect) and [`spellcheck`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/spellcheck) attributes may not deliver consistent behaviours across users' devices, and even conflict with a server-side autocorrect or spellcheck function provided by the search engine.

Setting the `required` attribute may also provide search users with a reminder that "empty" search terms are not able to be submitted, but this is not to be relied on as the sole means of providing that information.
