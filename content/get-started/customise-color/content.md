The Design System generates an accessible colour palette based on the colours you choose. All default colours are generated from four SASS variables:

- `$AU-color-background` the default background colour for header and menu
- `$AU-color-foreground-action` interactive element colours for buttons, links and calls to action
- `$AU-color-foreground-focus` focus outline colour for interactive elements
- `$AU-color-foreground-text ` the text colour

This will generate a pallete consisting of nine colours:

- Four background colors: `$AU-color-background`, `$AU-color-background-shade`,  `$AU-color-background-alt`, `$AU-color-background-alt-shade`, 
- Five foreground colors:`$AU-color-foreground-action`, `$AU-color-foreground-focus`, `$AU-color-foreground-text`, `$AU-color-foreground-muted`, `$AU-color-foreground-border`

These nine variables also have dark variations that can be accessed by replacing `color` with `colordark` e.g. `AU-colordark-background`.


## How the pallette is made

The first step is to choose your four colours for `background`, `action`, `focus` and `text`. These colours are then ran through functions that create an accessible colour pallette. 

The functions create three darker shades for the `background` colour. They also blend the text colour and background colour together, creating a border and muted text colour. After these colours are created we run a test to make sure that all the foreground colours pass colour contrast on the background colours. If they do not pass, the closest accessible colour is used in the pallette.

This process gives you a pallette of five foreground colours and four background colours that are WCAG AA 2.1 compliant.


## Add your colours

The first step is to choose your own colours for the `background`, `action`, `focus` and `text`. Once chosen you need to override the colours throughout the system. This requires installing the components, adding some custom code and compiling the `sass` into `css`.

If you have not set up your project already you can read the guides on the [getting started page](get-started). Once set up and you have components installed you should have an automatically generated `pancake.scss` file.

### Adding the components sass file

It is recommended to ignore the generated `pancake.scss` file and import it into a `main.scss` file. You can import the `pancake.scss` in the `main.scss` file like so:
```scss
@import "./pancake.scss";
```

### Override the colours

Any sass variable that ends with `!default` can be changed.

When you change a color variable above the import of `pancake.scss` it flows through all of the components in the design system. In this `main.scss` example we have changed the dark colour scheme above the import of the design system:
```scss
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
