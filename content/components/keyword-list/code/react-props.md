---
layout: section
---

### Props

| Prop name | Type    | Description
|-----------|---------------------------------------------------------------------------------------
| repeatedName | string  | Provide the aria label
| items        | object  | The text That is repeated in each item
| items[0].link   | string  | The link of this item
| items[0].name   | string  | The name of the item
| items[0].li     | object  | An object that will be spread onto the `<li>` tag, optional
| dark         | boolean | A dark variation of the component

All other props are spread into the component
