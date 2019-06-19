---
layout: component/code-demo
iframe: examples/example-image
code:
  - HTML: |
        <div class="au-card">
            <img class="au-card__image" src="http://placehold.it/1200x500" />
            <div class="au-card__inner">
                <div class="au-card__body">
                    <span>Image caption</span>
                </div>
            </div>
        </div>
  - React: |
      TODO React
      Get from https://github.com/govau/design-system-components
---
## Images

A card with an image. For full width images, add the `img` tag outside the `.au-card__inner` container. For images with inner padding, add the `img` tag inside the `.au-card__inner` container.
