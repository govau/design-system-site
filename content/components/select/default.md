---
layout: component/code-demo
example: examples/example-default
headline: Default
code:
  - HTML: |
      <label for="select1">What option?</label>
      <select id="select1" class="au-select">
        <option value="">Please select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
  - React: |
      import AUselect from './select';

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

**Note:** Select boxes (drop-down lists) have been provided in the system by necessity but should be avoided where possible. Select boxes are implemented differently on various devices and are proven to be difficult to use for users with low digital literacy. Instead consider using [text inputs](/components/text-inputs/) or for multiple-choice options try [radio buttons](/components/control-input/#radio).
