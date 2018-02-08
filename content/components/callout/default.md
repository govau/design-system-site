---
layout: component/code-demo
example: examples/example-default
headline: Default
code:
  - HTML: |
      <p class="au-callout" aria-label="Callout description1">
        A callout.
      </p>
  - React: |
      import { Callout } from './callout.js';

      <Callout description="description for first callout">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
      </Callout>
---

A singular method of expanding and collapsing a peice of content with a title. These are best used for transcripts of videos.
