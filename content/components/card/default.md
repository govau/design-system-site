---
layout: component/code-demo
iframe: examples/example-default
code:
  - HTML: |
        <!-- 
            dark: <div class="au-card au-body au-body--dark">
        -->

        <div class="au-card">
            <div class="au-card__inner">
                <h2 class="au-card__title">Card Title</h2>
                <p>Additional text relating to the card</p>
            </div>
        </div>

  - React: |
        /*
            Light: <AUcard >
            Dark:  <AUcard dark>
            Alt:   <AUcard alt>
        */

        import AUcard, { AUcardInner, AUcardTitle } from '@gov.au/card';

        <AUcard>
            <AUcardInner>
                <AUcardTitle>Card Title</AUcardTitle>
                <p>Some text</p>
                <p>Additional content</p>
            </AUcardInner>
        </AUcard>
---
## Basic card

Cards are used to organise information related to a single topic. Cards can contain multiple elements, such as images, links, actions, text and more.
