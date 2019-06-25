---
layout: component/code-demo
iframe: examples/example-default
code:
  - HTML: |
  
        <div class="au-card">
            <div class="au-card__inner">
                <h2>Card Title</h2>
                <hr class="au-card__divider"/>
                <div class="au-card__body">
                    <p>Some text</p>
                    <p>Additional text</p>
                </div>
                <div class="au-body au-card__footer">
                    <a href="#">Action Link</a>
                </div>
            </div>
        </div>
  - React: |
        import AUcard, { AUcardInner, AUcardDivider, AUcardFooter, AUcardBody } from '@gov.au/card';

        <AUcard>
            <AUcardInner>
                <h3>Some Heading</h3>
                <AUcardDivider />
                <AUcardBody>
                    <p>Some text</p>
                    <p>Additional content</p>
                </AUcardBody>
                <AUcardFooter class="au-body">
                    <a href="#">Action Link</a>
                </AUcardFooter>
            </AUcardInner>
        </AUcard>
---
## Basic card

Cards are used to organise information related to a single topic. Cards can contain multiple elements, such as images, links, actions, text and more.
