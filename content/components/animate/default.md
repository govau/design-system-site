---
layout: component/code-demo
iframe: examples/example-default
headline: Default
code:
  - HTML: |
      <button aria-controls="animate-example-1" onclick="AU.animate.Run({
          element: document.getElementById( 'animate-example-1' ),
          property: 'width',
          endSize: 0,
          speed: 500,
        })">Close</button>

      <button aria-controls="animate-example-1" onclick="AU.animate.Run({
          element: document.getElementById( 'animate-example-1' ),
          property: 'width',
          endSize: 'auto',
          speed: 500,
        })">Open</button>

      <button aria-controls="animate-example-1" onclick="AU.animate.Toggle({
          element: document.getElementById( 'animate-example-1' ),
          property: 'width',
          speed: 500,
        })">Toggle</button>

      <button aria-controls="animate-example-1" onclick="AU.animate.Stop( document.getElementById('animate-example-1') )">Stop</button>

      <div class="animate-example" id="animate-example-1">&nbsp;<br /><br /><br /></div>

      <!-- Make sure you include the uikit javascript file -->
      <script type="text/javascript" src="script.js"></script>
---

Toggle a property between two values across one item.
