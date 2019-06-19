---
layout: component/code-demo
iframe: examples/example-image
code:
  - HTML: |
        <div class="au-card">
            <img class="au-card__image" src="http://placehold.it/1200x500" />
            <div class="au-card__inner au-body">
                <a href="#">Action</a>
            </div>
        </div>
  - React: |
        import AUcard, { AUcardInner, AUcardImage, } from '@gov.au/card';

        <AUcard>
            <AUcardImage src="http://placehold.it/1200x500" />
            <AUcardInner className="au-body">
                Image caption
            </AUcardInner>
        </AUcard>
---
## Images

A card with an image. For full width images, add the `img` tag outside the `.au-card__inner` container. For images with inner padding, add the `img` tag inside the `.au-card__inner` container.
