<button aria-controls="close" onclick="AU.animate.Run({
    element: document.getElementById('dropdown-1'),
    property: 'width',
    endSize: 0,
    speed: 500,
    callback: function() {
      console.log('end close #1');
    },
  })">Close</button>
<button aria-controls="open" onclick="AU.animate.Run({
    element: document.getElementById('dropdown-1'),
    property: 'width',
    endSize: 'auto',
    speed: 500,
    callback: function() {
      console.log('end open #1');
    },
  })">Open</button>
<button aria-controls="toggle" onclick="AU.animate.Toggle({
    element: document.getElementById('dropdown-1'),
    property: 'width',
    speed: 500,
    prefunction: function( element, state ) {
      console.log( element );
      console.log( state );
      console.log('prefunction toggle #1');
    },
    postfunction: function( element, state ) {
      console.log( element );
      console.log( state );
      console.log('postfunction toggle #1');
    },
    callback: function( element, state ) {
      console.log( element );
      console.log( state );
      console.log('callback toggle #1');
    },
  })">Toggle</button>
<button aria-controls="stop" onclick="AU.animate.Stop( document.getElementById('dropdown-1') )">Stop</button>

<div class="animate-example" id="dropdown-1">
  &nbsp;<br><br><br>
</div>
