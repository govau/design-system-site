We use a technique called [lobotomised owl](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls) ( `* + *` ) to add spacing above components. This  only occurs when the component follows another element. This allows us to apply a consistent spacing  throughout the page.

As an example:
```scss
* + h2 {
  @include AU-space( margin-top, 2unit );
}
```
The above code will add a `margin-top` to any `<h2>` element that is followed by any other element. If the `<h2>` element is the first child or does not follow an element it will not receive a `margin-top`.

This allows our components to reduce the amount of wasted space. The selector adds space between elements but not above or below them. 

This is extremely useful in reducing the amount of CSS we write. The lobotomised owl selector allows us to remove code like `:first-of-type` and `:last-of-type` from components. We let the selector do the work, adding margins in-between when the components have a sibling.

One benefit we have noticed is that content writers no longer need to add additional custom classes to the components on the page. The spacing works in a logical way out of the box. This allows for css not to interrupt the editorial process.
