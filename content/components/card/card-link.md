---
layout: component/code-demo
iframe: examples/example-link
code:
  - HTML: |
        <div class="au-card au-card--shadow au-card--clickable" href="#">
            <img class="au-card__image" src="http://placehold.it/1200x500" alt="Placeholder image 1200 by 500"/>
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
      TODO React
      Get from https://github.com/govau/design-system-components
---
## Single call to action

For cards with a single call to action, the hit area can be made to wrap the entire card. This pattern may be used for a list of news items on a landing page, for example.
