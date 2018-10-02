---
---
The design system will generate a colour palette based on the colours you input. Creating a new palette within your project is straight forward. All the colours needed for the design system are generated from four SASS variables:

- Use `$AU-color-background` for setting the primary colour of your project e.g. background colour of the header, background colour of a menu.
- Use `$AU-color-foreground-action` for setting the action colour of your project e.g. button colour, link on a dark background.
- Use `$AU-color-foreground-focus` for setting the highlight colour of your project e.g. button colour.
- Use `$AU-color-foreground-text` for setting the text colour of your project e.g. text colour for the whole project.

Thes same list of variables exist for dark variants of components. See below the full list of user set variables.

```scss
// Light colour palette
$AU-color-foreground-action
$AU-color-foreground-focus
$AU-color-foreground-text
$AU-color-background
```

and the four dark variables if you want to use the dark variant of components:

```scss
// Dark colour palette
$AU-colordark-foreground-action
$AU-colordark-foreground-focus
$AU-colordark-foreground-text
$AU-colordark-background
```

All colour schemes generated are WCAG AA 2.1 compliant and accessible to all types of colour blindness.

To change the palette add the colour variables to your `main.scss` file. Assign your own colour for each variable in any legal CSS colour format you choose:

```scss
// main.scss file
$AU-color-foreground-action: #0000ff;
$AU-color-foreground-focus: red;
$AU-color-foreground-text: rgba(122, 200, 147, 0.75);
$AU-color-background: hsl(120, 100%, 50%);
```

### Compiling your SCSS to CSS
If you are using the [uikit-starter](https://github.com/govau/uikit-starter) then follow the steps to download the project.

Open the terminal and use the `cd` command to move into the root of your project:
`cd /Users/myUserName/Documents/myProject`

In the root of your project run the compile and watch command:
`npm run watch`

The script opens a browser-sync window where you will see the index page. The colour palette has been generated and changes all the colours of the projects components based on the variables values.

Changing any of the variable values and saving the `main.scss` file will automatically generate a new colour scheme and reload the browser with the updated styling.
