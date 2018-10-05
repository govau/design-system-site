Each component in the design system is customisable, through its variables or with additional code.

The patterns below are the best practice way to modify and change the components. This approach tries to retain all the hard work that was put into the components for accessibility and browser support.


## Set up

When you install a component from the design system the `pancake.scss` file is automatically generated.

It is recommended to not touch the generated `pancake.scss` and import it into a `main.scss` file. You can import the `pancake.scss` in the `main.scss` file like so:
```scss
@import "./pancake.scss";
```

## Customise components with SASS variables

Any SASS variable on a line that ends with `!default` can be changed.

When you change a variable above the import of `pancake.scss` it flows throughout all of the components in the system. In this `main.scss` example you can see customisations to the colours and grid:
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

Often times we may need a bigger button or a larger header component. In these cases we do not need to create our own components we can modify existing ones.

To customise components that already exist we recommend using [block element modifier](http://getbem.com/)( BEM ) to modify styles on existing components.

If you were going to make a large button with an icon you could add some additional classes and html to the existing `.au-btn`.
```html
<button class="au-btn au-btn--lg">
  <span class="icon icon--download"></span>
  Download
</button>
```

The system doesn't come with `.au-btn--lg` however you can add your own styles below the import of the generated `./pancake.scss` file.
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

// Larger button variation
.au-btn--lg {
  @include AU-space( padding, 2unit 4unit );
  @include AU-fontgrid( xl, nospace );
}

// Custom component that doesn't exist
.icon:before {
  @include AU-space( margin-right, 0.25unit );
}

.icon--download:before {
  content: "↓";
}
```

When adding your own styles it is important to use the functions and variables that exist in the Design System. This will make it easier to change the styles throughout the system and share your work with the wider community.
