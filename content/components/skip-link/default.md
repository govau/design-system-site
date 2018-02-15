---
layout: component/code-demo
example: examples/example-default
headline: Default
code:
  - HTML: |
      <nav class="au-skip-link">
      	<a class="au-skip-link__link" href="#content">Skip to main content</a>
      	<a class="au-skip-link__link" href="#nav">Skip to main navigation</a>
      </nav>
  - React: |
      import AUskipLink from './skip-link';

      <AUskipLink links={[
        {
          link: '#content',
          text: 'Skip to main content',
        },
        {
          link: '#nav',
          text: 'Skip to main navigation',
        },
      ]} />
---

Skip links are not visual until they receive focus.

Include skip links between the opening of the `<body>` and the page `<header>`.
