---
layout: component/code-demo
iframe: examples/example-width
iframeFullwidth: true
code:
  - HTML: |
      <!--
        XS:  <input class="au-text-input au-text-input--width-xs">
        SM:  <input class="au-text-input au-text-input--width-sm">
        MD:  <input class="au-text-input au-text-input--width-md">
        LG:  <input class="au-text-input au-text-input--width-lg">
        XL:  <input class="au-text-input au-text-input--width-xl">

      -->

      <label for="text-input-sm">label text</label>
      <input class="au-text-input--width-sm" name="text-input-sm" id="text-input-sm" type="text" value="2600">
     
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
      <AUtextInput id="text-input" width="sm" />
---

## Different width sizes for inputs
The width of a text input field should indicate the amount of information expected to be entered into the field. The size of the field acts as a visual constraint for the end user. Generally, fields such as postcodes should be shorter than ones for emails for example.
