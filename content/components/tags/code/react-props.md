---
layout: section
---

### Props


#### AUtagList

| Prop name | Type    | Description
|-----------|--------------------------------------------------------------------------------------- | --- |
| dark          | boolean | A dark variation of the component
| tags          | array   | All tags inside a neat array
| tags[0].link          | string  | The href link of this tag
| tags[0].linkComponent | string  | The component used for the link, optional
| tags[0].text          | string  | The text of the tag
| tags[0].li            | object  | An object that will be spread onto the `<li>` tag
| tags[0].attributeOptions            | object  | An object that will be spread onto the `AUtag`


All other props are spread into the component


#### AUtag

| Prop name | Type    | Description
|-----------|--------------------------------------------------------------------------------------- | --- |
| dark          | boolean | A dark variation of the component |
| link          | string | The link for this tag, optional |
| text          | string | The text for the tag |
| linkComponent          | string | The component used for the link, optional |


