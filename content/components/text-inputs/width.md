---
layout: component/code-demo
iframe: examples/example-width
iframeFullwidth: true
code:
  - HTML: |
      <!--
        XS:  <input class="au-text-input--width-xs">
        SM:  <input class="au-text-input--width-sm">
        MD:  <input class="au-text-input--width-md">
        LG:  <input class="au-text-input--width-lg">
        XL:  <input class="au-text-input--width-xl">

      -->

      <label for="text-input-sm">label text</label>
      <input class="au-text-input--width-sm" name="text-input-sm" id="text-input-sm" type="text" value="value">
     
  - React: |
      <!--
        XS:  <AUtextInput width="xs" />
        SM:  <AUtextInput width="sm" />
        MD:  <AUtextInput width="md" />
        LG:  <AUtextInput width="lg" />
        XL:  <AUtextInput width="xl" />
        
      -->

      import AUtextInput from '@gov.au/text-inputs';

      <label htmlFor="text-input" >label text</label>
      <AUtextInput width="sm" />
---

## Different width sizes for inputs
Add these classes to change the width of a text input. Choose from xs, sm, md, lg or xl. 

