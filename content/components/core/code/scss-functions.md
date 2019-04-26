---
layout: section
---

## SCSS Functions

### AU-color-contrast

Get the contrast ratio of two colors and warn when it is below WCAG 2.0 AA standard 4.5:1

`AU-color-contrast( foreground, background, silent, rounded )`


#### Props

| Prop name    | Type   | Description |
|--------------|--------|-------------|
| `foreground` | string | Color one   |
| `background` | string | Color two   |
| `silent`     | silent  | If the logs get printed in the terminal   |
| `rounded`    | boolean | If the value is rounded or not   |


#### Example

```scss
content: AU-color-contrast( red, blue );
```


### AU-color-a11y

The function to find the nearest accessible color.

`AU-color-a11y( toMakeA11y, background, ratioKey, steps )`


#### Props

| Prop name | Type    | Description |
|-----------|---------|-------------|
| `toMakeA11y` | string | The color that is to be changed.   |
| `background` | string | The background color to compare against toMakeA11y for the contrast.   |
| `ratioKey`   | string | The keyword `small` or `large` to set the WCAG 2.1 contrast ration or 3.0 or 4.5.   |
| `steps`      | number | The step size our function is searching for a new color in. The bigger the number the faster the process the rougher the found color. Must be from 0.1 to 100.   |


#### Example

```scss
background: AU-color-a11y( red, blue );
```


### AU-svguri

Generate an optimized SVG data-uri.

`AU-svguri( svg )`


#### Props

| Prop name | Type    | Description
|-----------|---------|-------------------------|
| `svg` | string  | The SVG data to be converted.


#### Example

```scss
background-image: AU-svguri(
  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128">' +
    '<path fill="red" d="M128 64l-64 64-16-16 64-64"/>' +
    '<path fill="red" d="M128 64l-16 16-64-64L64 0"/>' +
  '</svg>'
);
```


### AU-media

Create media queries and wraps the @content code inside of it.

`AU-media( breakpoint )`


#### Props

| Prop name | Type    | Description |
|-----------|---------|-------------|
| `breakpoint` | string | Either one of the following keywords: `xs`, `sm`, `md`, `lg` |


#### Example

```scss
@include AU-media( sm ) {
  width: 48%;
}
```


### AU-fontgrid

Mixin for setting font-size and line-height that snaps to the grid. Please visit our getting started docs to see [why and how to use the AU-fontgrid function](get-started/font-size-space/#font-size-function).

`AU-fontgrid( fontsize, lineheight )`


#### Props

| Prop name | Type    | Description |
|-----------|---------|-------------|
| `fontsize`   | string | Either one of the following keywords: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`.   |
| `lineheight` | string | Either one of the following keywords: `heading`, `nospace`, `default`.   |


#### Example

```scss
@include AU-fontgrid( md, heading );
```


### AU-space

Mixin for setting a properties value to snap to the grid, with a fallback for REM. Please visit our getting started docs to see [why and how to use the AU-space function](get-started/font-size-space/#au-space-function).

`AU-space( property, value )`


#### Props

| Prop name | Type    | Description |
|-----------|---------|-------------|
| `property` | string | The css property to apply the spacing ( `padding`, `margin`, `border` )   |
| `value`    | string | The values of the property ( `0`, `20px`, `1unit`, `5%` )   |


#### Example

```scss
@include AU-space( margin, 1unit 10% );
```


### AU-focus

Add the outline to focus.

`AU-focus( dark )`


#### Props

| Prop name | Type    | Description |
|-----------|---------|------------|
| `theme` | string | Either one of the following keywords: `light` or `dark`.   |

#### Example

```scss
@include AU-focus();
```


### AU-sronly

Hide an element from the screen but not a screen reader. This mixin should be used to provide additional information or context to a webpage or form that screenreader users would otherwise miss out on. Using this mixin the additional information will be picked up by a screenreader but will not be displayed in the browser. 

An example of a use case for this class would be, providing more context to a 'read more' link on a webpage. Using this class, additional information about what the 'read more' link relates to could be hidden from the browser, but still picked up by a screenreader. This would provide a screenreader user with the required context to understand what information is being provided.   

`AU-sronly()`


#### Example

```scss
@include AU-sronly();
```


### AU-clearfix

Clearing floats.

`AU-clearfix()`


#### Example

```scss
@include AU-clearfix();
```

