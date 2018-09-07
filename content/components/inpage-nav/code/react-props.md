---
layout: section
---

### Props

#### AUinpageNavLinks

| Prop name | Type    | Description
|-----------|---------------------------------------------------------------------------------------
| title                 | string   | The title above all sections
| ariaLabel             | string   | The aria-label attribute, defaults to "in page navigation"
| sections              | array    | All of the sections in a neat array
| sections[ 0 ].link    | string   | The link to the section, this will be converted to a hash link
| sections[ 0 ].title   | string   | The link text of this section
| sections[ 0 ].li      | object   | An object that will be spread onto the `<li>` tag, optional
| sections[ 0 ].onClick | function | A function to be executed when a section is clicked, optional

All other props are spread into the component


#### AUinpageNavSection

| Prop name | Type    | Description
|-----------|---------------------------------------------------------------------------------------
| title        | string  | The title of the section
| link         | string  | The link of this section, corresponds to the link inside AUinpageNavLinks
| level        | number  | The semantic heading tag level, h1-h6, optional
| headingClass | string  | Additional classes to be added to the headline, optional
| sectionLink  | string  | The text for the section link
| dark         | boolean | A dark variation of the component

All other props are spread into the component
