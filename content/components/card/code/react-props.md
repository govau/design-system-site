---
layout: section
---

### Props


#### AUcard

| Prop name     | Type        | Description |
| --------------| ----------- | ----------- |
| `link`        | string      | Link of where the card goes to. Should only be used when card has minimal content. |
| `shadow`      | boolean     | The table column header title text |
| `centred`     | boolean     | Centre the contents of the table |
| `clickable`   | boolean     | Makes the entire contents of the card clickable, provided there is an `<AUcardLink>` component is a child of the `<AUcard>` |
| `alt`       | bool       | The alt variation |
| `dark`      | bool       | The dark variation |
| `className`         | string     | An additional class, optional |



#### AUcardInner

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `className`        | string     | An additional class, optional |



#### AUcardLink

| Prop name    | Type       | Description |
| ------------ | ---------- | ----------- |
| `link`       | string     | Source code |
| `text`       | string     | Source of the image |
| `className`  | string     | An additional class, optional |


#### AUcardDivider

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `className`        | string     | An additional class, optional |


#### AUcardFooter

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `alt`       | bool       | The alt variation |
| `dark`      | bool       | The dark variation |
| `className`        | string     | An additional class, optional |



#### AUcardHeader

(Feature header)

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `level`     | string     | The heading level of the title inside the header, optional. Between 1-6 |
| `alt`       | bool       | The alt variation |
| `dark`      | bool       | The dark variation |
| `className` | string     | An additional class, optional |


#### AUcardTitle

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `level`     | string     | The heading level of the title inside the header. Between 1-6 |
| `className` | string     | An additional class, optional |

#### AUcardHeader

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `className`        | string     | An additional class, optional |


All other props are spread into the component
