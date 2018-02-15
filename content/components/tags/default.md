---
layout: component/code-demo
example: examples/example-default
headline: Tags using definition list
code:
  - HTML: |
      <dl class="au-tags">
        <dt>Tags:</dt>
          <dd><a href="#">foo</a></dd>
          <dd><a href="#">bar</a></dd>
          <dd><a href="#">baz</a></dd>
          <dd><a href="#">bloop</a></dd>
          <dd><a href="#">blip</a></dd>
          <dd><a href="#">wallop</a></dd>
          <dd><a href="#">doodle</a></dd>
          <dd><a href="#">pear ice cream</a></dd>
      </dl>
  - React: |
      TODO
---


The Tags component supports use with the [`<dl>` HTML element]( https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl). This is particularly useful when there are multiple lists of tags.

In a list of tags, each tags can be described by the `<dd>` (Description Detail) and titled with a `<dt>` (description term).
