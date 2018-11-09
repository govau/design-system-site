---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
code:
  - HTML: |
      <main class="au-grid">
        <div class="container">
          <div class="row">
            <div class="col-xs-1"><span>1</span></div>
            <div class="col-xs-2"><span>2</span></div>
            <div class="col-xs-2"><span>2</span></div>
            <div class="col-xs-3"><span>3</span></div>
            <div class="col-xs-4"><span>4</span></div>
          </div>

          <div class="row">
            <div class="col-xs-6"><span>6</span></div>
            <div class="col-xs-6"><span>6</span></div>
          </div>

          <div class="row">
            <div class="col-xs-12"><span>12</span></div>
          </div>
        </div>
      </main>
---
## Default

The grid is similar to the bootstrap grid system. This means you can access different breakpoints by changing the class name or by using the variables below. The breakpoints for each value are:

- `xs`  : `$AU-media-xs` : `576px`
- `sm`  : `$AU-media-sm` : `768px`
- `md`  : `$AU-media-md` : `992px`
- `lg`  : `$AU-media-lg` : `1200px`

These sizes can be overridden as necessary.
