---
layout: component/code-demo
example: examples/example-typography
headline: Typography
code:
  - SCSS: |
      @include AU-fontgrid( xxxl );          // font-size: 3rem    | 48px; line-height: 1.5  | 72px;
      @include AU-fontgrid( xxl );           // font-size: 2.5rem  | 40px; line-height: 1.5  | 60px;
      @include AU-fontgrid( xl );            // font-size: 2rem    | 32px; line-height: 1.5  | 48px;
      @include AU-fontgrid( lg );            // font-size: 1.5rem  | 24px; line-height: 1.5  | 36px;
      @include AU-fontgrid( md );            // font-size: 1.25rem | 20px; line-height: 1.6  | 32px;
      @include AU-fontgrid( sm );            // font-size: 1rem    | 16px; line-height: 1.5  | 24px;
      @include AU-fontgrid( xs );            // font-size: 0.87rem | 14px; line-height: 1.4  | 20px;

      @include AU-fontgrid( xxxl, heading ); // font-size: 3rem    | 48px; line-height: 1.25 | 60px;
      @include AU-fontgrid( xxl, heading );  // font-size: 2.5rem  | 40px; line-height: 1.3  | 52px;
      @include AU-fontgrid( xl, heading );   // font-size: 2rem    | 32px; line-height: 1.25 | 40px;
      @include AU-fontgrid( lg, heading );   // font-size: 1.5rem  | 24px; line-height: 1.33 | 32px;
      @include AU-fontgrid( md, heading );   // font-size: 1.25rem | 20px; line-height: 1.2  | 24px;
      @include AU-fontgrid( sm, heading );   // font-size: 1rem    | 16px; line-height: 1.25 | 20px;
      @include AU-fontgrid( xs, heading );   // font-size: 0.87rem | 14px; line-height: 1.14 | 16px;

      @include AU-fontgrid( xxxl, nospace ); // font-size: 3rem    | 48px; line-height: 1    | 48px;
      @include AU-fontgrid( xxl, nospace );  // font-size: 2.5rem  | 40px; line-height: 1    | 40px;
      @include AU-fontgrid( xl, nospace );   // font-size: 2rem    | 32px; line-height: 1    | 32px;
      @include AU-fontgrid( lg, nospace );   // font-size: 1.5rem  | 24px; line-height: 1    | 24px;
      @include AU-fontgrid( md, nospace );   // font-size: 1.25rem | 20px; line-height: 1    | 20px;
      @include AU-fontgrid( sm, nospace );   // font-size: 1rem    | 16px; line-height: 1    | 16px;
      @include AU-fontgrid( xs, nospace );   // font-size: 0.87rem | 14px; line-height: 1.14 | 16px;
---

A typographic scale was used to create a set of font-sizes and line-heights which have been designed for legibility and can be easily be implemented by designers or developers with a predictable output.

Using GOLD's typography values means any object containing text is more likely to align with another element. This appearance of a baseline grid is created by automatically rounding the line-heights to the nearest grid value `4px`, then converting them back to a unit-less value.

To ensure consistency with other components in the system:
- Designers can use font-size and line-height values from the typographic scale.
- Developers can use the `AU-fontgrid` function in SCSS.

**[Why does GOLD use system fonts?](/components/core/rationale/)**
