---
layout: component/code-demo
iframe: examples/example-link
code:
  - HTML: |
        <div class="au-card au-card--shadow au-card--clickable" href="#">
            <img class="au-card__image" src="https://designsystem.gov.au/assets/img/placeholder/600X260.png" />
            <div class="au-card__inner">
                <div class="au-body">
                        <h3><a class="au-card__link" href="#">Title of article</a></h3>
                </div>
                <hr class="au-card__divider">
                <p>Some text</p>
                <p>Additional text</p>
            </div>
        </div>
  - React: |
        <AUcard className="au-body" clickable shadow>
            <AUcardImage src="https://designsystem.gov.au/assets/img/placeholder/600X260.png" />
                <AUcardInner>
                    <h3 className=""><AUcardLink link="#" text="Title of article" /></h3>
                    <AUcardDivider />
                    <AUcardBody>
                        <p>Some text</p>
                        <p>Additional text</p>
                    </AUcardBody>
                </AUcardInner>
        </AUcard>
---
## Single call to action

For cards with a single call to action, the hit area can be made to wrap the entire card. This pattern may be used for a list of news items on a landing page, for example. Avoid wrapping an entire card in an anchor tag.
