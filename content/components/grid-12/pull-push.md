---
layout: component/code-demo
iframe: examples/example-pull-push
iframeFullwidth: true
code:
  - HTML: |
      <main class="au-grid">
        <div class="container">
          <div class="row">
            <div class="col-xs-4 col-xs-push-8"><span>First in source, last to display.</span></div>
            <div class="col-xs-4"><span>Second in source, second to display.</span></div>
            <div class="col-xs-4 col-xs-pull-8"><span>Last in source, first to display.</span></div>
          </div>
        </div>
      </main>
---
## Pull and Push

You can control the visual order of columns within a row by using the `pull` and `push` modifiers in class names.
