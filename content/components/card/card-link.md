---
layout: component/code-demo
iframe: examples/example-link
code:
  - HTML: |
        <!--
            shadow:  <div class="au-card au-card--shadow">
            centred:   <div class="au-card au-card--centred">
            clickable:   <div class="au-card au-card--clickable">
        -->

        <div class="au-card au-card--shadow au-card--clickable">
            <img class="au-card__image" src="https://designsystem.gov.au/assets/img/placeholder/600X260.png" alt />
            <div class="au-card__inner">
                <div class="au-body">
                        <h3><a class="au-card--clickable__link" href="#">Title of article</a></h3>
                </div>
                <p>Some text</p>
                <p>Additional text</p>
            </div>
        </div>
  - React: |
        <!--
            shadow:  <AUcard shadow>
            centred:   <AUcard centred>
            clickable:   <AUcard clickable>
        -->

        <AUcard className="au-body" clickable shadow>
            <AUcardImage src="https://designsystem.gov.au/assets/img/placeholder/600X260.png" alt />
                <AUcardInner>
                    <h3 className=""><AUcardLink link="#" text="Title of article" /></h3>
                    <AUcardBody>
                        <p>Some text</p>
                        <p>Additional text</p>
                    </AUcardBody>
                </AUcardInner>
        </AUcard>
---
## Clickable cards

For cards that contain a single link, the hit area for that link can be made to wrap the entire card. This pattern may be used for a list of news items on a landing page, for example. Avoid wrapping an entire card in an anchor tag as this can be a [difficult experience](/components/card/rationale/#cards-as-links) for a screen reader user.
