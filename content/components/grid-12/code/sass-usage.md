---
layout: section
---


## AU-grid-12-make-grid-columns

Iterates through all 12 columns (≥2) to calculate the correct amount of left and right padding for each of the classes.


### Example

```scss
@include AU-grid-12-make-grid-columns;
```

## AU-grid-12-float-grid-columns

Iterates through the columns to create a new list and then sets the float.


### Props

| Prop name | Type    | Description
|-----------|--------------------------------------------------------------------------------------- | --- |
| `class` | string  | The class to iterate and set the float against


### Example

```scss
@include AU-grid-12-float-grid-columns( 'xs' );
```


## AU-grid-12-calc-grid-column

Calculates the correct widths as a percentage based on the column count, column breakpoint class, and type (pull or offset).


### Props

| Prop name | Type    | Description
|-----------|--------------------------------------------------------------------------------------- | --- |
| `i`      | number  | The current column 1-12
| `class`  | string  | The current class xs, sm, md, lg
| `type`   | string  | The type of styles to be applied


### Example

```scss
@include AU-grid-12-calc-grid-column( 1, 'xs', 'width' );
```


## AU-grid-12-loop-grid-columns

Calls the `AU-grid-12-calc-grid-column` mixin and combines them.


### Props

| Prop name | Type    | Description
|-----------|--------------------------------------------------------------------------------------- | --- |
| `columns` | number  | Total number of columns
| `class`   | string  | The current class xs, sm, md, lg
| `type`    | string  | The type of styles to be applied


### Example

```scss
@include AU-grid-12-loop-grid-columns( $AU-grid-12-columns, $class, width );
```


## AU-grid-12-make-grid

Create the grid and all the necessary classes.

### Props

| Prop name | Type    | Description
|-----------|--------------------------------------------------------------------------------------- | --- |
| `class` | string  | The current class xs, sm, md, lg


### Example

```scss
//create xs classes
@include AU-grid-12-make-grid( xs );

//create sm classes
@include AU-media( sm ) {
  @include AU-grid-12-make-grid( sm );
}

//create md classes
@include AU-media( md ) {
  @include AU-grid-12-make-grid( md );
}

//create lg classes
@include AU-media( lg ) {
  @include AU-grid-12-make-grid( lg );
}
```
