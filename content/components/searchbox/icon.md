---
layout: component/code-demo
iframe: examples/example-icon
code:
  - HTML: |
      <!--
        Light:  <form class="au-search">
        Dark:   <form class="au-search au-search--dark">
      -->

        <form role="search" aria-label="sitewide" class="au-search au-search--responsive">
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

      <AUsearchbox respsonive label="Search" btnText="Search" id="site-search"/>


---
## Icon

The icon only version
