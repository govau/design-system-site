---
layout: component/code-demo
example: examples/example-default
headline: Default
code:
  - HTML: |
      <!--
        Light:  <nav class="au-inpage-nav-links">
        Dark:   <nav class="au-inpage-nav-links au-inpage-nav-links--dark">
      -->

      <nav class="au-inpage-nav-links">
        <h2 class="au-inpage-nav-links__heading">Contents</h2>
        <ul class="au-link-list">
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
        </ul>
      </nav>

      <h2 class="au-inpage-nav-section au-display-sm">
        Section 1 page headline
        <a id="section1" class="au-inpage-nav-section-link" href="#section1">Link to section</a>
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

      <h2 class="au-inpage-nav-section au-display-sm">
        Section 1 page headline
        <a id="section2" class="au-inpage-nav-section-link" href="#section1">Link to section</a>
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  - React: |
      /*
        Light:  <AUinpageNavLinks>
        Dark:   <AUinpageNavLinks dark>
      */

      import { AUinpageNavLinks, AUinpageNavSection } from '@gov.au/inpage-nav';

      <AUinpageNavLinks sections={[
        {
          link: 'section1',
          title: 'Section 1',
        },
        {
          link: 'section2',
          title: 'Section 2',
        },
      ]} />

      <AUinpageNavSection title="Section 1 headline" link="section1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </AUinpageNavSection>

      <AUinpageNavSection title="Section 2 headline" link="section2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </AUinpageNavSection>
---

The inpage nav (or page contents) is placed above sections of a page and
provides navigation to individual anchor links located in those sections.
