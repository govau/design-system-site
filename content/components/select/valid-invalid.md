---
layout: component/code-demo
iframe: examples/example-valid
iframeFullwidth: true
code:
  - HTML: |
      <!--
      Valid:    <label class="au-select au-select--valid">
      Invalid:  <select class="au-select au-select--invalid">
      -->

      <label for="select1block">What option?</label>
      <select id="select1block" class="au-select au-select--valid">
        <option value="">Please select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
  - React: |
      /*
        Valid:  <AUselect status="valid" options={[
        Invalid:   <AUselect status="invalid" options={[
      */

      import AUselect from '@gov.au/select';

      <AUselect valid id="select1block" options={[
        {
          value: '',
          text: 'Please select',
        },
        {
          value: '1',
          text: 'Option 1',
        },
        {
          value: '2',
          text: 'Option 2',
        },
        {
          value: '3',
          text: 'Option 3',
        },
      ]}
      status="invalid"/>
---
## Valid and invalid states

Use the `.au-select--valid` class to add a border around the select to indicate valid or invalid selections.
