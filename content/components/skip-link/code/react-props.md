---
layout: section
---

### Props

| Prop name | Type    | Description
|-----------|--------------------------------------------------------------------------------------- | --- |
| ariaLabel        | string   | The aria-label attribute, defaults to "side navigation"
| links            | array    | All links inside an array, format: [{ url: '', text: '' },{...},{...}]
| links[0].link    | string   | The href link of this link
| items[0].text    | string   | The text of the link
| items[0].onClick | function | A function to execute when the link is clicked

All other props are spread into the component

