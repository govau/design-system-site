---
layout: component/code-demo
example: examples/example-lists
exampleFullwidth: true
headline: Lists
code:
  - HTML: |
      <!--
        Light:      <div class="au-body">
        Light Alt:  <div class="au-body au-body--alt">
        Dark:       <div class="au-body au-body--dark">
        Dark Alt:   <div class="au-body au-body--dark au-body--alt">
      -->

      <div class="au-body">
        <ul>
          <li>List item</li>
          <li>List item</li>
        </ul>

        <ol>
          <li>List item</li>
          <li>List item</li>
        </ol>

        <dl>
          <dt>Definition title</dt>
            <dd>Definition Definition</dd>
            <dd>Definition Definition</dd>
        </dl>
      </div>
---

Common HTML lists receive styling from the body component.

- [Unordered list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
- [Ordered list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
- [Description List](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
