---
layout: component/code-demo
iframe: examples/example-group
code:
  - HTML: |
      <!--
        Light:  <section class="au-accordion">
        Dark:   <section class="au-accordion au-accordion--dark">

        Note: Accordion requires feature detection to see if a user has javascript.
              Please add a `no-js` class on html and replace it with `js` if enabled
              https://www.paulirish.com/2009/avoiding-the-fouc-v3/
      -->
      <ul class="au-accordion-group">
        <li>
          <section class="au-accordion">
            <button class="au-accordion__title js-au-accordion au-accordion--closed" aria-controls="accordion-group-1" aria-expanded="false" aria-selected="false" onclick="return AU.accordion.Toggle( this )">Accordion group 1</button>

            <div class="au-accordion__body au-accordion--closed" id="accordion-group-1">
              <div class="au-accordion__body-wrapper">
                Here <a href="#url">is</a> some accordion content
              </div>
            </div>
          </section>
        </li>

        <li>
          <section class="au-accordion">
            <button class="au-accordion__title js-au-accordion au-accordion--closed" aria-controls="accordion-group-2" aria-expanded="false" aria-selected="false" onclick="return AU.accordion.Toggle( this )">Accordion group 2</button>

            <div class="au-accordion__body au-accordion--closed" id="accordion-group-2">
              <div class="au-accordion__body-wrapper">
                Here <a href="#url">is</a> some accordion content
              </div>
            </div>
          </section>
        </li>
      </ul>

  - React: |
      /*
        Light:  <Accordion header="Accordion title">
        Dark:   <Accordion header="Accordion title" dark>

        Note: Accordion requires feature detection to see if a user has javascript.
              Please add a `no-js` class on html and replace it with `js` if enabled
              https://www.paulirish.com/2009/avoiding-the-fouc-v3/
      */

      import AUaccordion from '@gov.au/accordion';
      <ul className="au-accordion-group">
        <li>
          <AUaccordion closed={ true } header="Accordion group 1">
            Here <a href="#url">is</a> some accordion content
          </AUaccordion>
        </li>
        
        <li>
          <AUaccordion closed={ true } header="Accordion group 2">
            Here <a href="#url">is</a> some accordion content
          </AUaccordion>
        </li>
      </ul>
---
## Accordion group

A group of accordions that expand and collapse on click. Notice that the accordions only change the one that is clicked.
