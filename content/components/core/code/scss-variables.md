---
layout: section
---

## SCSS Variables

### Default Colors

| Variable Name               | Default Value | Description                                                                                                |
|-----------------------------|---------------|------------------------------------------------------------------------------------------------------------|
| `$AU-color-foreground-text`   | `#313131`       | Colour used for paragraphs, headings etc.                                                                                 |
| `$AU-color-foreground-action` | `#00698F`       | Colour of links, buttons or other action items.                                                             |
| `$AU-color-foreground-focus`  | `#9263DE`       | Color around an element that is in focus state. |
| `$AU-color-background`        | `#FFFFFF`       | Background colour.                                                                            |


### Dark Theme 

| Variable Name               | Default Value | Description                                                                                                |
|-----------------------------|---------------|------------------------------------------------------------------------------------------------------------|
| `$AU-colordark-foreground-text`   | `#FFFFFF`       | Colour used for paragraphs, headings etc.                                                                                  |
| `$AU-colordark-foreground-action` | `#61DAFF`       | Colour of links, buttons or other action items.                                                             |
| `$AU-colordark-foreground-focus`  | `#C390F9`       | Color around an element that is in focus state. |
| `$AU-colordark-background`        | `#135E70`       | Background colour.                                                                            |


### Fonts

| Variable Name      |  Default Value                                                                                                                         |  Description                                                          | 
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------| 
| `$AU-font`           |  `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"` |  Fonts used for body text.                                                       | 
| `$AU-font-monospace` |  `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`                                                              |  Fonts used for mathematical and code related HTML elements | 
| `$AU-fontsize-map`   |  ( xs: 14, sm: 16, md: 20, lg: 24, xl: 32, xxl: 40, xxxl: 48 ) |  Pixel sizes from a 1.25 typescale rounded to the nearest `$AU-unit` (vertical grid, default value at 4) | 
| `$AU-lineheight-map` |  ( nospace: 1, heading: 1.25, default: 1.5 )                   |  Lineheight mapped to keyword                                                      | 


### Media Breakpoints

Our breakpoints are designed for mobile first. These breakpoints correspond to `xs`, `sm`, `md` and `lg` in the Design System [media query function](#au-media).

| Variable Name |  Default Value |  Description                                   | 
|---------------|----------------|------------------------------------------------| 
| `$AU-media-xs`  |  `576px`         |  Small devices, large phones, portrait tablets. | 
| `$AU-media-sm`  |  `768px`         |  Landscape tablets, 768px and higher.           | 
| `$AU-media-md`  |  `992px`         |  Laptops/Desktops, 992px and higher.            | 
| `$AU-media-lg`  |  `1200px`        |  Large laptops and desktops, 1200px and higher. | 


### Page Alerts

Standard colors for the [Design System Page Alerts](../components/page-alerts)

| Variable Name     | Default Value | Description                                                                                                   |
|-------------------|---------------|---------------------------------------------------------------------------------------------------------------|
| `$AU-color-error`   | `#ff635c`       | Error page alert color |
| `$AU-color-success` | `#0cac78`       | Success page alert color                             |
| `$AU-color-warning` | `#f69900`       | Warning page alert color  |
| `$AU-color-info`    | `#00bfe9`       | Info page alert color                                                                             |


### Other

Other useful variables

| Variable Name     |  Default Value |  Description                                     | 
|-------------------|----------------|--------------------------------------------------| 
| `$AU-rem`           |  16            |  `rem` value used for `rem` calculation.           | 
| `$AU-unit`          |  4             |  Unit used for all type and grid calculations. | 
| `$AU-pixelfallback` |  `true`          |  Enable/disable pixel fall back for older browsers.         | 
| `$AU-border-radius` |  `$AU-unit + 0px` |  Design System border-radius styles. | 
| `$AU-maxwidth`      |  `42em`           |  Max width for line lengths. | 
