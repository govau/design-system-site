---
layout: section
---

### Props

| Prop name | Type    | Description
|-----------|---------|----------------------------------|
| menuHeader        | string   | The headline of the menu
| menuHeaderLink    | string   | The menu headers link
| accordionHeader   | string   | The headline of the accordion
| linkComponent     | string   | The component used for the child links, optional
| ariaLabel         | string   | The aria-label attribute, defaults to "side navigation"
| closed            | boolean  | Closed state, optional
| speed             | number   | Speed of the animation in ms, optional
| onOpen            | function | A function executed when the accordion opens, optional
| afterOpen         | function | A function executed after the accordion opens, optional
| onClose           | function | A function executed when the accordion closes, optional
| afterClose        | function | A function executed after the accordion closes, optional
| dark              | boolean  | A dark variation of the component
| alt               | boolean  | An alternate variation of the component
| items             | object   | The menu items
| items[0].text     | string   | The text of the link
| items[0].link     | string   | The location of the link
| items[0].children | object   | An array of `items` containing child links, text and children

All other props are spread into the component
