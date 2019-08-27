---
layout: component/code-demo
iframe: examples/example-default
code:
  - HTML: |
      <!--
        Light:  <form class="au-search">
        Dark:   <form class="au-search au-search--dark">
                <input class="au-text-input au-text-input--dark">...
      -->

        <form role="search" aria-label="sitewide" class="au-search">
            <label for="standard" class="au-search__label">Search this website</label>
            <input type="search" id="standard" name="standard" class="au-text-input"/>
            <div class="au-search__btn">
                <button class="au-btn" type="submit"><span class="au-search__submit-btn-text">Search</span></button>
            </div>
        </form>

  - React: |
      /*
        Light:  <AUsearchbox >
        Dark:   <AUsearchbox dark />
      */

      import AUsearchbox from './searchbox.js';

      <AUsearchbox aria-label="sitewide" label="Search this website" btnText="Search" id="site-search"/>


---
## Default

Use search component to help users find content or pages through keywords. This can be particularly useful for a web service with a large amount of pages.
