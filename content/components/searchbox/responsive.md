---
layout: component/code-demo
iframe: examples/example-responsive
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Respsonive:  <form class="au-search au-search--responsive">
        Icon only:   <form class="au-search au-search--icon">
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
        
      <AUsearchbox respsonive label="Search" btnText="Search" id="site-search"/>


---
## Responsive

The responsive variation replaces the button text with a search icon on smaller devices. This allows more space for text to be written in the text input.
