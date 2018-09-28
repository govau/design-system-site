<button aria-controls="animate-example-2"  onclick="AU.animate.Run({
    element: document.querySelectorAll( '.animate-example-2' ),
    property: 'width',
    endSize: 'auto',
    speed: 1000,
  })">Open all</button>
<button aria-controls="animate-example-2" onclick="AU.animate.Run({
    element: document.querySelectorAll( '.animate-example-2' ),
    property: 'width',
    endSize: 0,
    speed: 1000,
  })">Close all</button>
<button aria-controls="animate-example-2" onclick="AU.animate.Toggle({
    element: document.querySelectorAll( '.animate-example-2' ),
    property: 'width',
})">Toggle all</button>

<div id="animate-example-2">
  <div class="animate-example animate-example-2">&nbsp;<br><br><br></div>
  <div class="animate-example animate-example-2" style="width:0;">&nbsp;<br><br><br></div>
  <div class="animate-example animate-example-2">&nbsp;<br><br><br></div>
</div>
