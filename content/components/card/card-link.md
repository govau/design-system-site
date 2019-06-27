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

        <div class="au-card au-body au-card--shadow au-card--clickable">
            <img class="au-responsive-media-img" src="https://designsystem.gov.au/assets/img/placeholder/600X260.png" alt />
            <div class="au-card__inner">
                <h3 class="au-card__title"><a class="au-card--clickable__link" href="#">Title of article</a></h3>
                <p>Some text</p>
            </div>
        </div>
  - React: |
        <!--
            shadow:  <AUcard shadow>
            centred:   <AUcard centred>
            clickable:   <AUcard clickable>
        -->

        <AUcard className="au-body" clickable shadow>
            <img className="au-responsive-media-img" src="https://designsystem.gov.au/assets/img/placeholder/600X260.png" alt="" />
                <AUcardInner>
                    <AUcardTitle level="3"><AUcardLink link="#" text="Title of article" /></h3>
                        <p>Some text</p>
                </AUcardInner>
        </AUcard>
---
## Clickable cards

For cards that contain a single link, the hit area for that link can be made to wrap the entire card. This pattern may be used on cards that act as a preview for an article or blog post, for example. These cards could contain an image, a title and a brief summary of the article. Avoid wrapping an entire card in an anchor tag as this can be a [difficult experience](/components/card/rationale/#cards-as-links) for a screen reader user.
