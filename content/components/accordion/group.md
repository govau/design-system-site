---
layout: component/code-demo
example: examples/example-group
headline: Accordion group
code:
  - HTML: |
      <section class="au-accordion">
        <a href="#accordion-group-1" class="au-accordion__title js-au-accordion au-accordion--closed" aria-controls="accordion-group-1" aria-expanded="false" aria-selected="false" role="tab" onclick="return AU.accordion.Toggle( this )">Accordion group 1</a>

        <div class="au-accordion__body au-accordion--closed" id="accordion-group-1" aria-hidden="false">
          <div class="au-accordion__body-wrapper">
            <div class="no-a11y-test">
              Here <a href="#url">is</a> some accordion content
            </div>
          </div>
        </div>
      </section>

      <section class="au-accordion">
        <a href="#accordion-group-2" class="au-accordion__title js-au-accordion au-accordion--closed" aria-controls="accordion-group-2" aria-expanded="false" aria-selected="false" role="tab" onclick="return AU.accordion.Toggle( this )">Accordion group 2</a>

        <div class="au-accordion__body au-accordion--closed" id="accordion-group-2" aria-hidden="false">
          <div class="au-accordion__body-wrapper">
            <div class="no-a11y-test">
              Here <a href="#url">is</a> some accordion content
            </div>
          </div>
        </div>
      </section>
  - React: |
      import AUaccordion from '@gov.au/accordion';

      <AUaccordion open={ false } header="Accordion group 1">
        Here <a href="#url">is</a> some accordion content
      </AUaccordion>
      <AUaccordion open={ false } header="Accordion group 2">
        Here <a href="#url">is</a> some accordion content
      </AUaccordion>
---

To be added
