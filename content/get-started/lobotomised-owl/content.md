We use the [lobotomized owl](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls) (LO) selector mainly to apply consistent spacing between elements such as headings. 

As an example:

```scss
    * + h2, h3, h4, h5, h6 {
        @include AU-space( margin-top, 2unit );
    }
```
The above code will add a `margin-top` to any `<h2> - <h6>` elements that are followed by any other element.

There are many advantages of approach.

- No wasted space: the LO selector is excellent for situations where you want to add space between elements but not above or below them. In the headings component, we use the selector to apply a `margin-top` to headings that are not `<h1>` 's. 


- Consistency and less CSS: the LO selector allows for consistent spacing across a site. By using a single selector, the structure of pages can be defined.


- Easier for content writers: If content writers are writing an article in markdown, they don't want to worry about styling or spacing or headings and paragraphs, they just want to write the article text. The LO selector allows for styling to not impede with the editorial process. 

