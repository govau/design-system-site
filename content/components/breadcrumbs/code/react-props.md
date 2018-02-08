---
layout: section
---

### Props

| prop name | type    | description
|-----------|---------------------------------------------------------------------------------------
| label       | string  | Provide the aria label
| items       | object  | The link, text and props for each of the breadcrumbs
| items.link  | string  | The link of the breadcrumb, optional
| items.text  | string  | The text of the breadcrumb
| items.li    | object  | An object that will be spread onto the <li> tag, optional
| dark        | boolean | A dark variation of the component

All other props are spread into the component
