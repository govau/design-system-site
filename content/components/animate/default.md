---
layout: component/code-demo
example: examples/example-default
headline: Default
code:
  - HTML: |
      <button aria-controls="close" onclick="AU.animate.Run({
          element: document.getElementById('dropdown-1'),
          property: 'width',
          endSize: 0,
          speed: 500,
        })">Close</button>
      <button aria-controls="open" onclick="AU.animate.Run({
          element: document.getElementById('dropdown-1'),
          property: 'width',
          endSize: 'auto',
          speed: 500,
        })">Open</button>
      <button aria-controls="toggle" onclick="AU.animate.Toggle({
          element: document.getElementById('dropdown-1'),
          property: 'width',
          speed: 500,
        })">Toggle</button>
      <button aria-controls="stop" onclick="AU.animate.Stop( document.getElementById('dropdown-1') )">Stop</button>

      <div class="animate-example" id="dropdown-1">&nbsp;<br /><br /><br /></div>
---

Fluid animation from left to right and up and down.
