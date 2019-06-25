---
layout: component/code-demo
iframe: examples/example-image
code:
  - HTML: |
        <div class="au-card">
            <img class="au-responsive-media-img" src="https://designsystem.gov.au/assets/img/placeholder/600X260.png" alt />
            <div class="au-card__inner">
                <div class="au-body">
                    <a href="#">Action</a>
                </div>
            </div>
        </div>
  - React: |
        import AUcard, { AUcardInner } from '@gov.au/card';

        <AUcard>
            <img className="au-responsive-media-img" src="https://designsystem.gov.au/assets/img/placeholder/600X260.png" alt="" />
            <AUcardInner className="au-body">
                Image caption
            </AUcardInner>
        </AUcard>
---
## Images

A card with an image. For full width images, add the `img` tag outside the `.au-card__inner` container. For images with inner padding, add the `img` tag inside the `.au-card__inner` container.
