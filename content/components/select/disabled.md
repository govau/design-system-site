---
layout: component/code-demo
iframe: examples/example-disabled
code:
  - HTML: |
      <!--
      Light: <select class="au-select" disabled>
      Dark:  <label class="au-select au-select--dark" disabled>
      -->

      <label for="select1disabled">What option?</label>
      <select id="select1disabled" class="au-select" disabled>
        <option value="">Please select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
  - React: |
      /*
        Light:  <AUselect disabled options={[
        Dark:   <AUselect disabled dark options={[
      */

      import AUselect from '@gov.au/select';

      <AUselect valid id="select1disabled" options={[
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
## Disabled 

Disabled select boxes are unusable and can not be clicked. This prevents a user from interacting with the input element until another action is complete. Disabled input elements in a form will not be submitted.
