---
layout: component/code-demo
example: examples/example-group
headline: Accordion group
code:
  - HTML: |
      <!--
        Light:  <section class="au-accordion">
        Dark:   <section class="au-accordion au-accordion--dark">

        Note: Accordion requires feature detection to see if a user has javascript.
              Please add a `no-js` class on html and replace it with `js` if enabled
              https://www.paulirish.com/2009/avoiding-the-fouc-v3/
      -->

      <section class="au-accordion">
        <a href="#accordion-group-1" class="au-accordion__title js-au-accordion au-accordion--closed" aria-controls="accordion-group-1" aria-expanded="false" aria-selected="false" role="tab" onclick="return AU.accordion.Toggle( this )">Accordion group 1</a>

        <div class="au-accordion__body au-accordion--closed" id="accordion-group-1" aria-hidden="false">
          <div class="au-accordion__body-wrapper">
            Here <a href="#url">is</a> some accordion content
          </div>
        </div>
      </section>

      <section class="au-accordion">
        <a href="#accordion-group-2" class="au-accordion__title js-au-accordion au-accordion--closed" aria-controls="accordion-group-2" aria-expanded="false" aria-selected="false" role="tab" onclick="return AU.accordion.Toggle( this )">Accordion group 2</a>

        <div class="au-accordion__body au-accordion--closed" id="accordion-group-2" aria-hidden="false">
          <div class="au-accordion__body-wrapper">
            Here <a href="#url">is</a> some accordion content
          </div>
        </div>
      </section>
  - React: |
      /*
        Light:  <Accordion header="Accordion title">
        Dark:   <Accordion header="Accordion title" dark>

        Note: Accordion requires feature detection to see if a user has javascript.
              Please add a `no-js` class on html and replace it with `js` if enabled
              https://www.paulirish.com/2009/avoiding-the-fouc-v3/
      */

      import AUaccordion from '@gov.au/accordion';

      <AUaccordion open={ false } header="Accordion group 1">
        Here <a href="#url">is</a> some accordion content
      </AUaccordion>
      <AUaccordion open={ false } header="Accordion group 2">
        Here <a href="#url">is</a> some accordion content
      </AUaccordion>
---

A group of accordions that expand and collapse on click. Notice that the accordions only change the one that is clicked.
