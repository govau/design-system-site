Every website has different user needs, to make sure they are met some times you will need to create your own components.

When creating new components it is important to use the inbuilt functionality of the design system. The grid, variables, functions that are built into the system help to simplify this process. This approach ensures changes to the system and changes you make will naturally flow into your own custom components.

## Adding responsive sizing

To start our component we will create a simple html element with some styles.
```html
<div class="card"></div>
```

```scss
$boxshadow: ;

.card {
  @include AU-space( padding, 1unit );
  border-radius: $AU-border-radius;
}
```

We recommend keeping your component classes simple, to help scale your component we recommend usng the [BEM naming system](http://getbem.com/).



## Adding colour
As an example, if you were building a card component and wanted to set the background colour, you would not do this:

```scss
$.au-card-bg-color: #ef11ef;
```

In order to integrate your component with the colour system you can use one of the colour variables:

```scss
$.au-card-bg-color: $AU-color-background;
```

Or use the color variable directly inside the component scss:

```scss
..au-card {
    background-color: $AU-color-background;
}
```

## Adding spacing
With the card component, you might want to add margins to it so it looks more like a card. Using the built-in spacing function will keep all your spacing consistent across the component:

```scss
..au-card {
    background-color: $AU-color-background;
    @include AU-space( margin, 1unit );
}
```

## Adding typography
Use the font system to add consistent typography across your component.

We want to add a heading level 2 to our component and use the font sizing function. We would do the following:

```scss
..au-card {
    background-color: $AU-color-background;
    @include AU-space( margin, 1unit );

    h2 {
        @include AU-fontgrid( md, nospace );
    }
}
```
The md argument gives us the medium size for the h2 element, this sizing system is part of the [design system core](/components/core/). The 'nospace' argument reduces all margins and padding to zero. 

You can learn more about [the space and font functions here](https://github.com/govau/uikit/wiki/How-to-use-the-font-size-and-space-functions).


## Additional resources
- [Design system core](/components/core/)
- [Design system grid](/components/grid-12/)
- [Using the colour system](/get-started/customise-color)
- [The BEM naming system](http://getbem.com/)
- [How to use the space and font functions](https://github.com/govau/uikit/wiki/How-to-use-the-font-size-and-space-functions)
