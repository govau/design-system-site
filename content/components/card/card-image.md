---
layout: component/code-demo
iframe: examples/example-image
code:
  - HTML: |
        <div class="au-card au-body">
            <img class="au-responsive-media-img" src="https://designsystem.gov.au/assets/img/placeholder/600X260.png" alt />
            <div class="au-card__inner">
                <a href="#">Action</a>
            </div>
        </div>
  - React: |
        import AUcard, { AUcardInner } from '@gov.au/card';

        <AUcard className="au-body">
            <img className="au-responsive-media-img" src="https://designsystem.gov.au/assets/img/placeholder/600X260.png" alt="" />
            <AUcardInner>
                <a href="#">Action</a>
            </AUcardInner>
        </AUcard>
---
## Images

A card with an image. For full width images, add the `img` tag outside the `.au-card__inner` container. For images with inner padding, add the `img` tag inside the `.au-card__inner` container.
