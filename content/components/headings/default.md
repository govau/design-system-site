---
layout: component/code-demo
example: examples/example-default
headline: Default
code:
  - HTML: |
      <h4 class="au-display-xxxl">Display xxxl</h4>
      <h6 class="au-display-xxl">Display xxl</h6>
      <h4 class="au-display-xl">Display xl</h4>
      <h5 class="au-display-lg">Display lg</h5>
      <h2 class="au-display-md">Display md</h2>
      <h3 class="au-display-sm">Display sm</h3>
      <h1 class="au-display-xs">Display xs</h1>
  - React: |
      import AUheading from '@gov.au/headings';

      <AUheading size="xxxl" level="4">Display xxxl</AUheading>
      <AUheading size="xxl"  level="6">Display xxl</AUheading>
      <AUheading size="xl"   level="4">Display xl</AUheading>
      <AUheading size="lg"   level="5">Display lg</AUheading>
      <AUheading size="md"   level="2">Display md</AUheading>
      <AUheading size="sm"   level="3">Display sm</AUheading>
      <AUheading size="xs"   level="1">Display xs</AUheading>
---

Our range of supported headings. These use the <a href="http://localhost:8080/components/core/#typography">AU-fontgrid</a> function to make the font size and lineheight snap to grid.
