---
layout: section
---

### Props

| Prop name | Type    | Description
|-----------|---------------------------------------------------------------------------------------
| label                   | string  | Provide the aria label
| items                   | object  | The link, text and props for each of the breadcrumbs
| linkComponent           | string  | The component used for the child links, optional
| items[0].link           | string  | The link of the breadcrumb, optional
| items[0].linkComponent  | string  | The component used for the link, optional
| items[0].text           | string  | The text of the breadcrumb
| items[0].li             | object  | An object that will be spread onto the `<li>` tag, optional
| dark                    | boolean | A dark variation of the component

All other props are spread into the component
