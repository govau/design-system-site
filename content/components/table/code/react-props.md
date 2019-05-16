---
layout: section
---

### Props

#### AUtable

| Prop name           | Type        | Description |
| ------------------- | ----------- | ----------- |
| `caption`           | string      | The table caption summary |
| `headers`           | array      | The table column headers  |
| `headers[0].title`  | string     | The table column header title text |
| `headers[0].type`   | string     | Type of the header, can be either `text` or `numeric` for left or right alignment respectively. |
| `headers[0].width`  | string     | The width (%) of the header. Can be either `10`, `20`, `25`, `33`, `50` or `75` |
| `headers[0].key`    | string     | The key used in the corresponding row of data|
| `headers[0].render` | function   | A function used to customise rendering for the corresponding data cells|
| `data`              | array      | The table data in the body |
| `data[0]`           | string     | The first row of data in the body. |
| `data[0].example`   | array      | The value of the cell for key `example`. This will correspond with the header that has the `example` key |
| `striped`           | string     | A striped variation of the component |
| `className`         | string     | An additional class, optional |

All other props are spread into the component


### AUtableHeader

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `title`        |  string    | The table column header title text |
| `type`        |  string    | Type of the header, can be either `text` or `numeric` for left or right alignment respectively. |
| `width`        |  string    | The width of the header. Can be either `10`, `20`, `25`, `33`, `50` or `75` |
| `className`        | string     | An additional class, optional |


### AUtableCell

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `data`        |  string    | The cell data|
| `type`        |  string    | Type of the cell, can be either `text` or `numeric` for left or right alignment respectively. |
| `className`        | string     | An additional class, optional |


### AUtableBody

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `className`        | string     | An additional class, optional |


### AUtableHead

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `className`        | string     | An additional class, optional |


### AUtableRow

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `className`        | string     | An additional class, optional |


### AUtableCaption

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `tableCaption`        | string     | Caption (or title) of the table |
| `className`        | string     | An additional class, optional |
