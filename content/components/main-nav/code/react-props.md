---
layout: section
---

### Props

#### AUmainNav

| Prop name | Type    | Description
|-----------|---------------------------------------------------------------------------------------
| alt         | boolean | An alternate variation of the component
| dark        | boolean | A dark variation of the component

All other props are spread into the component


#### AUmainNavContent

| Prop name | Type    | Description
|-----------|---------------------------------------------------------------------------------------
| linkComponent     | string   | The component used for the child links, optional
| ariaLabel         | string   | The aria-label attribute, defaults to "main navigation"
| speed             | number   | Speed of the animation in ms, optional
| onOpen            | function | A function executed when the accordion opens, optional
| afterOpen         | function | A function executed after the accordion opens, optional
| onClose           | function | A function executed when the accordion closes, optional
| afterClose        | function | A function executed after the accordion closes, optional
| items             | object   | The menu items
| items[0].text     | string   | The text of the link
| items[0].link     | string   | The location of the link
| items[0].active   | boolean  | If the menu item is active

All other props are spread into the component
