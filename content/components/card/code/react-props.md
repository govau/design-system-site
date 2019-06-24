---
layout: section
---

### Props


#### AUcard

| Prop name     | Type        | Description |
| --------------| ----------- | ----------- |
| `link`        | string      | Link of where the card goes to. Should only be used when card has minimal content. |
| `shadow`      | boolean     | The table column header title text |
| `centred`     | boolean     | Center the contents of the table |
| `clickable`   | boolean     | Makes the entire contents of the card clickable, provided there is an `<AUcardLink>` component is a child of the `<AUcard>` |
| `className`         | string     | An additional class, optional |



#### AUcardInner

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `className`        | string     | An additional class, optional |



#### AUcardImage

| Prop name    | Type       | Description |
| ------------ | ---------- | ----------- |
| `src`        | string     | Source of the image |
| `className`  | string     | An additional class, optional |


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
| `className`        | string     | An additional class, optional |



#### AUcardBody

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `className`        | string     | An additional class, optional |


All other props are spread into the component
