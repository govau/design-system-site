---
layout: section
---

### Options


#### AU.animate.Toggle( options )

| Option       | Description
|--------------|------------------------------------------------------------------------------------
| element      | DOM node/s you want to animate
| property     | CSS property you want to animate (optional, defaults to height)
| endSize      | 'auto' or pixel size of the property after the animation has finished (optional)
| speed        | Animation speed in milliseconds (optional, defaults to 250ms)
| callback     | Function to be executed after the animation ends, passes {object} element, {string} state (optional)


#### AU.animate.Stop( options )

| Option       | Description
|--------------|------------------------------------------------------------------------------------
| element      | DOM node/s you want to animate


#### AU.animate.Toggle( options )

| Option       | Description
|--------------|------------------------------------------------------------------------------------
| element      | DOM node/s you want to animate
| property     | CSS property you want to animate (optional, defaults to height)
| openSize     | Pixel size of the property when the element is open (optional, defaults to auto)
| closeSize    | Pixel size of the property when the element is closed (optional, defaults to 0)
| speed        | Animation speed in milliseconds (optional, defaults to 250ms)
| prefunction  | Function to be executed before any animation starts, passes {object} element, {string} state (optional) 
| postfunction | Function to be executed after any animation ends, passes {object} element, {string} state (optional) 
| callback     | Function to be executed after the animation ends, passes {object} element, {string} state (optional)
