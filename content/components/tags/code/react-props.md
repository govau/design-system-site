---
layout: section
---

### Props

| Prop name | Type    | Description
|-----------|--------------------------------------------------------------------------------------- | --- |
| dark          | boolean | A dark variation of the component
| tags          | array   | All tags inside a neat array
| linkComponent | string  | The component used for the child links, optional
| tags[0].link          | string  | The href link of this tag
| tags[0].linkComponent | string  | The component used for the link, optional
| tags[0].text          | string  | The text of the tag
| tags[0].li            | object  | An object that will be spread onto the `<li>` tag


All other props are spread into the component
