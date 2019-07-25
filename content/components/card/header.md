---
layout: component/code-demo
iframe: examples/example-header
code:
  - HTML: |
        <!-- 
            light: <div class="au-card__header"><h2>
            alt:  <div class="au-body au-body--alt au-card__header"><h2>...</h2></div>
            dark: <div class="au-body au-body--dark au-card__header"><h2>...</h2></div>
        -->

        <div class="au-card au-card--centred au-body">
        <div class="au-body au-body--alt au-card__header">
            <h4>Feature card title</h4>
        </div>
            <div class="au-card__inner">
                <p> Additional conent relating to the card</p>
            </div>
        </div>

  - React: |
        /*
            Light: <AUcardHeader >
            Dark:  <AUcardHeader dark>
            Alt:   <AUcardHeader alt>
        */

        import AUcard, { AUcardInner, AUcardHeader } from '@gov.au/card';

        <AUcard className="au-body">
            <AUcardInner>
                <AUcardHeader level="3">Card Title</h3>
                <p>Some text</p>
                <p>Additional content</p>
            </AUcardInner>
        </AUcard>
---
## Feature headers

Use feature headers to give the card heading more visual prominence.
