---
layout: section
---

### Props

`AUprogressIndicatorItem`

| Prop name  | Type    | Description
|------------|-------------------------------------------------------------------------------------- | --- |
| link          | string  | The link URL, If no link is passed we render a button instead of a link tag
| linkComponent | string  | The component used for the link, optional
| text          | string  | The text of this item
| status        | boolean | The status of this item
| statusText    | boolean | The status text of this item
| li            | object  | An additional object to be spread into the wrapping element

All other props are spread into the component

`AUprogressIndicator`

| Prop name | Type    | Description
|-----------|--------------------------------------------------------------------------------------- | --- |
| dark          | boolean | A dark variation of the component
| items         | object  | All items for this progress indicator (see `AUprogressIndicator` for details)
| linkComponent | string  | The component used for the child links, optional

All other props are spread into the component
