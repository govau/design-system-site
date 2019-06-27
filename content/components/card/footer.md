---
layout: component/code-demo
iframe: examples/example-footer
iframeFullwidth: true
code:
  - HTML: |
        <!-- 
            light: <div class="au-card__footer">
            alt: <div class="au-card__footer au-body au-body--alt">
            dark: <div class="au-card au-body au-body--dark">
        -->

        <div class="au-card au-body">
            <div class="au-card__inner">
                <h3 class="au-card__title">Card title</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptatibus.</p>
            </div>
            <div class="au-card__footer">
                <a href="#">Action</a>
            </div>
        </div>


  - React: |
        /*
            Light: <AUcardFooter>
            Dark:  <AUcardFooter dark>
            Alt:   <AUcardFooter alt>
        */

        import AUcard, { AUcardInner, AUcardFooter, AUcardTitle } from '@gov.au/card';

        <AUcard className="au-body">
            <AUcardInner>
                <AUcardTitle level="3"> Card Title</AUcardTitle>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptatibus.</p>
            </AUcardInner>
            <AUcardFooter alt>
                <a href="#">Action</a>
            </AUcardFooter>
        </AUcard>

---
## Feature footers

Use feature footers to give the card footer more visual prominence. This can be used to guide users to the call to action.
