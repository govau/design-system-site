---
---

# Code

## React Usage

```
jsx
import AUbutton from '@gov.au/buttons';

<AUbutton>Continue</AUbutton>
```

<br>
### Props

| prop name | type      | description
|-----------|---------------------------------------------------------------------------------------
| href    | string  | If an `href` is set the button will render as a link
| as      | string  | The kind of button, `secondary`,`tertiary`
| block   | boolean | The block option to make the button fill the available width
| type    | boolean | The type attribute
| dark    | boolean | A dark variation of the component

<br>
### Exports

```
jsx
import { AUinpageNavLinks, AUinpageNavSection } from './inpage-nav.js';
```

<br>
### Spreads

```
jsx
<AUlinkList className="additional-class" items={[
  {
    link: '#signout',
    text: 'Sign Out',
    className: 'test-class test-class--mod',
    li: {
      className: 'test-class',
    },
  },
]} />
```

or

`li` {Object} content will be spread into the `<li>` tag

<br>
### Implementation example

https://github.com/govau/uikit/blob/master/packages/buttons/tests/react/index.js

<hr>
