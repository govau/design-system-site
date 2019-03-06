---
layout: component/code-demo
iframe: examples/example-link
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <a href="#" class="au-btn">
        Dark:   <a href="#" class="au-btn au-btn--dark">
      -->

      <a href="#" class="au-btn">
        Primary link button
      </a>

      <a href="#" class="au-btn au-btn--secondary">
        Secondary link button
      </a>

      <a href="#" class="au-btn au-btn--tertiary">
        Tertiary link button
      </a>
  - React: |
      /*
        Light:  <AUbutton href="#">
        Dark:   <AUbutton link="#" dark>
      */

      import AUbutton from '@gov.au/buttons';

      <AUbutton link="#">
        Primary link button
      </AUbutton>

      <AUbutton secondary link="#">
        Secondary link button
      </AUbutton>

      <AUbutton tertiary link="#">
        Tertiary link button
      </AUbutton>
---
## Links as buttons

Simple links don’t always catch a user’s attention when they’re scanning a website. So a link is sometimes styled to look like a button where you want to give
it greater prominence.
