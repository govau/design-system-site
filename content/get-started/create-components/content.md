There are many elements that you may need to build yourself in order to satisfy your users needs. For the purpose of demonstrating best practices we will be crafting a hypothetical custom card component. This will give you a good basis for approaching the build of any custom component you need to create.

When creating new components using the design system it is important to use the grid, default variables, font and spacing functions that are built into the system. This ensures that if any changes are made to your projects core variables, such as the colours, they will update in your own component without any further action required. This is important when generating your projects colour palette, as they will remain accessible.

## Adding responsive sizing
Our imaginary card component starts life in a very simple way:

```html
<div class="card-component"></div>
```

A div with a fresh class name, our blank canvas. This class can be any name you want but we recommend usng the [BEM naming system](http://getbem.com/) in order to make keeping track of your component code easier. What happens at this point is we start defining the size and position of the component. Instead of doing it in css though, we simply need to add wrappers and some [grid classes](/components/grid-12/):

```html
<div class="au-grid container-fluid">
    <div class="row">
        <div class="card-component col-sm-12 col-md-4"></div>
    </div>
</div>
```

The `au-grid` class on the root element lets the component nested within use the 12 column grid system. The `container-fluid` class provides a responsive container for the card to sit in. The `col-md-4` class gives the component a width of four grid columns when the screen is medium sized or larger. The `col-sm-12` class makes the card element full width when viewed on small screens like tablet or mobile.


## Adding colour
As an example, if you were building a card component and wanted to set the background colour, you would not do this:

```scss
$card-component-bg-color: #ef11ef;
```

In order to integrate your component with the colour system you can use one of the colour variables:

```scss
$card-component-bg-color: $AU-color-background;
```

Or use the color variable directly inside the component scss:

```scss
.card-component {
    background-color: $AU-color-background;
}
```

## Adding spacing
With the card component, you might want to add margins to it so it looks more like a card. Using the built-in spacing function will keep all your spacing consistent across the component:

```scss
.card-component {
    background-color: $AU-color-background;
    @include AU-space( margin, 1unit );
}
```

## Adding typography
Use the font system to add consistent typography across your component.

We want to add a heading level 2 to our component and use the font sizing function. We would do the following:

```scss
.card-component {
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
- [Using the colour system](#)
- [The BEM naming system](http://getbem.com/)
- [How to use the space and font functions](https://github.com/govau/uikit/wiki/How-to-use-the-font-size-and-space-functions)
