Each component in the design system is customisable, through its variables or with additional code.

The patterns below are the best practice way to modify and change the components. This approach tries to retain all the hard work that was put into the components for accessibility and browser support.


## Set up

When you install a component from the Design System the `pancake.scss` file is automatically generated.

It is recommended to ignore the generated `pancake.scss` file and import it into a `main.scss` file. You can import the `pancake.scss` in the `main.scss` file like so:
```scss
@import "./pancake.scss";
```

## Customise components with sass variables

Any sass variable on a line that ends with `!default` can be changed.

When you change a variable above the import of `pancake.scss` it flows throughout all of the components in the system. In this `main.scss` example you can see customisations to the colors and grid:
```scss
// Dark colour theme changes
$AU-colordark-foreground-text:   #ffffff;
$AU-colordark-foreground-action: #f9f9f9;
$AU-colordark-foreground-focus:  #13e241;
$AU-colordark-background:        #134169;

// Grid breakpoint changes
$AU-media-sm: 750px;
$AU-media-md: 980px;

// Import the design system components
@import "./pancake.scss";

// Additional customisation not related to components
body {
  margin: 0;
  padding: 0;
}
```


## Customise components with additional code

[TODO]
