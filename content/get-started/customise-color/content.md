The design system generates an accessible colour palette based on the colours you choose. All default colours are generated from four SASS variables:

- `$AU-color-background` the default background colour for header and menu
- `$AU-color-foreground-action` interactive element colours for buttons, links and calls to action
- `$AU-color-foreground-focus` focus outline colour for interactive elements
- `$AU-color-foreground-text ` the text colour

This will generate a palette consisting of nine colours:

- Four background colours: `$AU-color-background`, `$AU-color-background-shade`,  `$AU-color-background-alt`, `$AU-color-background-alt-shade`
- Five foreground colours:`$AU-color-foreground-action`, `$AU-color-foreground-focus`, `$AU-color-foreground-text`, `$AU-color-foreground-muted`, `$AU-color-foreground-border`

These nine variables also have dark variations that can be accessed by replacing `color` with `colordark` e.g. `AU-colordark-background`.

## How the palette is made

The first step is to choose your four colours for `background`, `action`, `focus` and `text`. These colours are then run through functions that create an accessible colour palette when the SASS to CSS is compiled.

The functions create three darker shades for the `background` colour. They also blend the text colour and background colour together, creating a border and muted text colour. After these colours are created we run a test to make sure that all the foreground colours pass colour contrast on the background colours. If they do not pass, the closest accessible colour is used in the palette.

This process gives you a palette of five foreground colours and four background colours that are WCAG AA 2.1 compliant.

## Add your colours

The first step is to choose your own colours for the `background`, `action`, `focus` and `text`. Once chosen, you need to override the colours throughout the system. This requires installing the components, and creating a simple development environment to compile the `sass` into `css`.

> If you have not set up your project already or do not have a developer environment we recommend following our [development environment guide](/get-started/development-environment).

Once you have this set up and you should have your components installed, and have a script that compiles `sass` into `css` from one `main.scss` file that imports the generated `pancake.scss` file.

### Override the colours

To override the default colours you can assign your own value to any sass variable that ends with `!default`. You will find the colour variables inside the core component ( however we will modify it in another location).

When you change a colour variable above the import of `pancake.scss` it flows through all of the components in the design system. In this `main.scss` example we have changed the dark colour scheme above the import of the design system:
```scss
// main.scss

// Dark colour theme changes
$AU-colordark-foreground-text:   #ffffff;
$AU-colordark-foreground-action: #f9f9f9;
$AU-colordark-foreground-focus:  #13e241;
$AU-colordark-background:        #134169;

// Import the design system components
@import "./pancake.scss";

// Additional customisation not related to components
body {
  margin: 0;
  padding: 0;
}
```

> Once you have entered your colour preferences, make sure to convert the SASS file into CSS. We have a guide on how to set up a development environment which covers [how to compile SASS files into CSS files](/get-started/development-environment), for use on your project.
