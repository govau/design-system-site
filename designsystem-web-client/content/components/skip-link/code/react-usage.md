---
layout: section
---

## React Usage

```jsx
import AUskipLink from '@gov.au/skip-link';

<AUskipLink links={[
  {
    link: '#nav',
    text: 'Skip to navigation',
  },
  {
    link: '#content',
    text: 'Skip to content',
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
```
