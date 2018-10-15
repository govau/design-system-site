---
layout: section
---

## SCSS Variables

### Colors for the light theme

| Variable Name               | Default Value | Description                                                                                                |
|-----------------------------|---------------|------------------------------------------------------------------------------------------------------------|
| `$AU-color-foreground-text`   | #313131       | Standard body text colour used for paragraphs, headings etc.                                                                                 |
| `$AU-color-foreground-action` | #00698f       | Colour of links, buttons or other action items.                                                             |
| `$AU-color-foreground-focus`  | #9263DE       | Colour of highlighting of an element that is currently targeted by the keyboard, or activated by the mouse. |
| `$AU-color-background`        | #ffffff       | Standard colour for backgrounds.                                                                            |


### Colors for the dark theme

| Variable Name               | Default Value | Description                                                                                                |
|-----------------------------|---------------|------------------------------------------------------------------------------------------------------------|
| `$AU-colordark-foreground-text`   | #ffffff       | Standard body text colour used for paragraphs, headings etc.                                                                                  |
| `$AU-colordark-foreground-action` | #61daff       | Colour of links, buttons or other action items.                                                             |
| `$AU-colordark-foreground-focus`  | #C390F9       | Colour of highlighting of an element that is currently targeted by the keyboard, or activated by the mouse. |
| `$AU-colordark-background`        | #135E70       | Standard colour for backgrounds.                                                                            |


### Page Alerts

Standard colors for the [Design System Page Alerts](../components/page-alerts)

| Variable Name     | Default Value | Description                                                                                                   |
|-------------------|---------------|---------------------------------------------------------------------------------------------------------------|
| `$AU-color-error`   | #ff635c       | Color for the error page alert - used to notify users of errors that will stop them from completing the task. |
| `$AU-color-success` | #0cac78       | Color for the success page alert - used to notify user a task is fully completed.                             |
| `$AU-color-warning` | #f69900       | Color for the warning page alert - used to provide information to users that will help them avoid a problem.   |
| `$AU-color-info`    | #00bfe9       | Color for the info page alert - used to notify users of important information that may help them complete a task.                                                                             |


### Media Breakpoints

Our breakpoints are designed for mobile first. These breakpoints correspond to `xs`, `sm`, `md` and `lg` in the Design System [media query function](#au-media).

| Variable Name |  Default Value |  Description                                   | 
|---------------|----------------|------------------------------------------------| 
| `$AU-media-xs`  |  576px         |  Small devices, large phones, portrait tablets. | 
| `$AU-media-sm`  |  768px         |  Landscape tablets, 768px and higher.           | 
| `$AU-media-md`  |  992px         |  Laptops/Desktops, 992px and higher.            | 
| `$AU-media-lg`  |  1200px        |  Large laptops and desktops, 1200px and higher. | 


### Fonts

| Variable Name      |  Default Value                                                                                                                         |  Description                                                          | 
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------| 
| `$AU-font`           |  -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" |  Default fonts for the Design System.                                                       | 
| `$AU-font-monospace` |  "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace                                                              |  Default monospaced fonts (fonts where each character takes the same amount of horizontal space) for the Design System. | 
| `$AU-fontsize-map`   |  ( xs: 14, sm: 16, md: 20, lg: 24, xl: 32, xxl: 40, xxxl: 48 ) |  Predetermined pixel sizes from a 1.25 typescale rounded to the nearest `$AU-unit` (vertical grid, default value at 4) | 
| `$AU-lineheight-map` |  ( nospace: 1, heading: 1.25, default: 1.5 )                   |  Predetermined lineheight mapped to keyword                                                      | 


### Other

| Variable Name     |  Default Value |  Description                                     | 
|-------------------|----------------|--------------------------------------------------| 
| `$AU-rem`           |  16            |  `rem` value used for `rem` calculation           | 
| `$AU-unit`          |  4             |  Unit used for all type and grid calculations | 
| `$AU-pixelfallback` |  true          |  Enable/disable pixel fall back for older browsers         | 
| `$AU-border-radius` |  $AU-unit + 0px |  Design Systeem border-radius styles | 
