---
layout: component/code-demo
example: examples/example-typography
headline: Typography
code:
  - HTML: |
      <div class="fontgrid-xxxl">XXXL</div>
      <div class="fontgrid-xxl">XXL</div>
      <div class="fontgrid-xl">XL</div>
      <div class="fontgrid-lg">LG</div>
      <div class="fontgrid-md">MD</div>
      <div class="fontgrid-sm">SM</div>
      <div class="fontgrid-xs">XS</div>
  - SCSS: |
      .fontgrid-xxxl {
        @include AU-fontgrid( xxxl );
      }
      .fontgrid-xxl {
        @include AU-fontgrid( xxl );
      }
      .fontgrid-xl {
        @include AU-fontgrid( xl );
      }
      .fontgrid-lg {
        @include AU-fontgrid( lg );
      }
      .fontgrid-md {
        @include AU-fontgrid( md );
      }
      .fontgrid-sm {
        @include AU-fontgrid( sm );
      }
      .fontgrid-xs {
        @include AU-fontgrid( xs );
      }
---

A typographic scale was used to create a set of font-sizes and line-heights which have been designed for legibility and can be easily be implemented by designers or developers with a predictable output.

Using GOLD's typography values means any object containing text is more likely to align with another element. This appearance of a baseline grid is created by automatically rounding the line-heights to the nearest grid value `4px`, then converting them back to a unit-less value.

To ensure consistency with other components in the system:
- Designers can use font-size and line-height values from the typographic scale.
- Developers can use the `AU-fontgrid` function in SCSS.

**[Why does GOLD use system fonts?](/components/core/rationale/)**
