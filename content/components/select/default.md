---
layout: component/code-demo
iframe: examples/example-default
code:
  - HTML: |
      <!--
        Light:  <select class="au-select au-select--block">
        Dark:   <select class="au-select au-select--block au-select--dark">
      -->

      <label for="select1">What option?</label>
      <select id="select1" class="au-select">
        <option value="">Please select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
  - React: |
      /*
        Light:  <AUselect options={[
        Dark:   <AUselect dark options={[
      */

      import AUselect from '@gov.au/select';

      <AUselect id="select1" options={[
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
      ]} />
---
## Default

Select boxes (drop-down lists) allow users to select a value from a list that is hidden by default.
