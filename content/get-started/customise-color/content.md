The Design System generates an accessible colour palette based on the colours you choose. All default colours are generated from four SASS variables:

- `$AU-color-background` the default background colour for header and menu
- `$AU-color-foreground-action` interactive element colours for buttons, links and calls to action
- `$AU-color-foreground-focus` focus outline colour for interactive elements
- `$AU-color-foreground-text ` the text colour

This will generate a pallete consisting of nine colours:

- Four background colors: `$AU-color-background`, `$AU-color-background-shade`,  `$AU-color-background-alt`, `$AU-color-background-alt-shade`
- Five foreground colors:`$AU-color-foreground-action`, `$AU-color-foreground-focus`, `$AU-color-foreground-text`, `$AU-color-foreground-muted`, `$AU-color-foreground-border`

These nine variables also have dark variations that can be accessed by replacing `color` with `colordark` e.g. `AU-colordark-background`.

## How the palette is made

The first step is to choose your four colours for `background`, `action`, `focus` and `text`. Next you run the script that transforms scss to css. The output of running this script generates an accessible colour pallette.

The functions create three darker shades for the `background` colour. They also blend the text colour and background colour together, creating a border and muted text colour. After these colours are created we run a test to make sure that all the foreground and background colours have enough contrast when compared to each other in order to satisfy accessibility standards. If they do not pass, the next closest accessible colour is used in the pallette instead.

The resulting colour pallette is WCAG AA 2.1 compliant.

## Add your colours

Adding your own colours involves taking the four SASS variable mentioned at the start of this article and assigning them new colour values. To override the default colours throughout the system you first need to install the components you need for your project.

If you have not set up a new project yet you can read the guides on the [getting started page](/get-started/download-page/). Once set up with the components installed you need to run the build script and you will have generated a `pancake.scss` file.

### Adding the pancake.scss file

A file called `pancake.scss` is generated in the root directory. In order to use this file all you have to do is import it into your `main.scss` file:

```scss
// main.scss
@import "./pancake.scss";
```

Your `main.scss` file is where you will import and write any other sass you need for your project.

### Override the colours

To override the default colours you can assign your own value to any sass variable that ends with `!default`. You will find these variables inside the core component however you don't need to change anything inside thi package.

When you change a color variable above the import of `pancake.scss` it flows through all of the components in the design system. In this `main.scss` example we have changed the dark colour scheme above the import of the design system:
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

### Compile SASS to CSS

We recommend looking into the create a [development environment page](/get-started/development-environment) this goes into detail on how to create a pipeline for compiling sass to css.

To compile sass into css you need to install the npm package [node-sass](https://www.npmjs.com/package/node-sass). Once installed you can create a script to compile sass into css or run a command in terminal.

Go to your project folder in terminal:
```bash
cd /Users/myUserName/Documents/myProject
``` 

Install `node-sass`:
```bash
npm install node-sass
```

You can then create a script in the `package.json` file that runs node-sass or run the following in the command line:
```bash
node-sass assets/sass/main.scss /docs/css/main.css
```

> This script may change depending on where your sass files are located

If you are using the uikit starter you can run:
```bash
npm run watch
```

This will open a browser that will automatically refresh when changes are made. Changing any of the variable values and saving the `main.scss` file will automatically generate a new colour scheme and reload the browser with the updated styling.
