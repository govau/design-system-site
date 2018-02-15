---
layout: component/code-demo
example: examples/example-block
headline: Block
code:
  - HTML: |
      <label for="select1">What option?</label>
      <select id="select1" class="au-select au-select--block">
        <option value="">Please select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
  - React: |
      import AUselect from './select';

      <AUselect block id="select1" options={[
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

Use an `.au-text-input--block` class to make a select box fill the available space.
