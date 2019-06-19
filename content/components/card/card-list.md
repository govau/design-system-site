---
layout: component/code-demo
iframe: examples/example-list
iframeFullwidth: true
code:
  - HTML: |
        <div class="row">
            <ul class="au-card-list au-card-list--matchheight">
                <li class="col-sm-3 xol-xs-6">
                    <div class="au-card">
                    <div class="au-card__inner">
                        <div class="au-card__title">
                                <h2>Card 1</h2>
                        </div>
                        <p>Some text</p>
                        <p>Additional text</p>
                    </div>
                </div>
                </li>
                <li class="col-sm-3 xol-xs-6">
                    <div class="au-card">
                    <div class="au-card__inner">
                        <div class="au-card__title">
                                <h2>Card 2</h2>
                        </div>
                        <p>Some text</p>
                        <p>Additional text</p>
                        <p>More text</p>
                    </div>
                </div>
                </li>
            </ul>
        </div>
  - React: |
        import AUcard, { AUcardInner, AUcardImage, AUcardDivider, AUcardLink, AUcardFooter } from '@gov.au/card';

        <div class="row">
            <ul className="au-card-list au-card-list--matchheight">
                    <li className="col-sm-3 col-xs-6">
                        <AUcard >
                            <AUcardInner>
                                    <h3 className="au-body">Card 1</h3>
                            </AUcardInner>
                        </AUcard>
                    </li>
                    <li className="col-sm-3 col-xs-6">
                        <AUcard>
                            <AUcardInner>
                                    <h3 className="au-body">Card 2</h3>
                            </AUcardInner>
                        </AUcard>
                    </li>
            </ul>
        </div>

---
## Card lists

For cards with a single call to action, the hit area can be made to wrap the entire card. This pattern may be used for a list of news items on a landing page, for example. Avoid wrapping an entire card in an anchor tag.
