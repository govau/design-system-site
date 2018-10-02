---
layout: component/code-demo
example: examples/example-default
headline: Default
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
        <a href="#accordion-default" class="au-accordion__title js-au-accordion" aria-controls="accordion-default" aria-expanded="true" aria-selected="true" onclick="return AU.accordion.Toggle( this )">
          Accordion title
        </a>

        <div class="au-accordion__body" id="accordion-default">
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

      <AUaccordion header="Accordion title">
        Here <a href="#url">is</a> some accordion content
      </AUaccordion>
---

A singular method of expanding and collapsing a piece of content with a title. These are best used for transcripts of videos.
