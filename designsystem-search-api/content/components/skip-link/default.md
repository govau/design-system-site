---
layout: component/code-demo
iframe: examples/example-default
code:
  - HTML: |
      <nav class="au-skip-link" aria-label="skip links navigation">
        <a class="au-skip-link__link" href="#content">Skip to main content</a>
        <a class="au-skip-link__link" href="#nav">Skip to main navigation</a>
      </nav>
      <nav id="nav" tabindex="-1" aria-label="skip links navigation">
        <ul>
          <li><a href="#">Some navigation</a></li>
        </ul>
      </nav>
      <div id="content" tabindex="-1">
        Some content here
      </div>
  - React: |
      import AUskipLink from '@gov.au/skip-link';

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
      <nav id="nav" tabindex="-1" aria-label="skip links navigation">
        <ul>
          <li><a href="#">Some navigation</a></li>
        </ul>
      </nav>
      <div id="content" tabindex="-1">
        Some content here
      </div>
---
## Default

Skip links are not visual until they receive focus.

Include skip links between the opening of the `<body>` and the page `<header>`.

The content that the skip links goes to is linked with an `id` and it moves the focus to the element with `tabindex="-1"`.
