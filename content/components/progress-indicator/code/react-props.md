---
layout: section
---

### Props

`AUprogressIndicator`

| prop name  | type    | description
|------------|--------------------------------------------------------------------------------------
| link       | string  | The link URL, If no link is passed we render a button instead of a link tag
| text       | string  | The text of this item
| status     | boolean | The status of this item
| statusText | boolean | The status text of this item
| li         | object  | An additional object to be spread into the wrapping element

All other props are spread into the component

`AUprogressIndicatorItem`

| prop name | type    | description
|-----------|---------------------------------------------------------------------------------------
| dark      | boolean | A dark variation of the component
| items     | object  | All items for this progress indicator (see `AUprogressIndicator` for details)

All other props are spread into the component
