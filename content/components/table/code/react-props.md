---
layout: section
---

### Props


#### AUtable

| Prop name   | Type        | Description |
| ----------- | ----------- | ----------- |
| `caption`        | string     | The table caption summary |
| `headers`        |  array    | The table column headers  |
| `headers[0].title`        |  string    | The table column header title text |
| `headers[0].type`        |  string    | Type of the header, can be either `text` or `numeric` for left or right alignment respectively. |
| `headers[0].width`        |  string    | The width of the header. Can be either `10`, `20`, `25`, `33`, `50` or `75` |
| `headers[0].key`        |  string    | The key used in the corresponding row of data|
| `data`        |  array    | The table data in the body |
| `data[0]`        |  string    | The first row of data in the body. |
| `data[0].example`        | array     | The value of the cell for key `example`. This will correspond with the header that has the `example` key |
| `striped`        | string     | A striped variation of the component |
| `className`        | string     | An additional class, optional |

All other props are spread into the component
