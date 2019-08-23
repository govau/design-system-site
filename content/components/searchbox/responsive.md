---
layout: component/code-demo
iframe: examples/example-responsive
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <form class="au-search">
        Dark:   <form class="au-search au-search--dark">
      -->

        <form role="search" class="au-search au-search--responsive">
            <label for="standard" class="au-search__label">Enter a domain</label>
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

      <AUsearchbox label="Search" btnText="Search" id="site-search"/>


---
## Responsive

**Note:** Select boxes (drop-down lists) have been provided in the system by necessity but should be avoided where possible. Select boxes are implemented differently on various devices and are proven to be difficult to use for users with low digital literacy. Instead consider using [text inputs](/components/text-inputs/) or for multiple-choice options try [radio buttons](/components/control-input/#radio).
