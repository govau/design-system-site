---
layout: component/code-demo
example: examples/example-spacing
headline: Spacing
code:
  - SCSS: |
      // SCSS Example:

      @include AU-space( padding, 1unit );

      // CSS Output:

      // padding: 16px;
      // padding: 1rem;

---

The consistent alignment of elements is paramount for good UI design. The design system provides functions in SCSS so that designers and developers can work together with predictable outcomes.

The base-unit `1unit` of spacing in the design system is derived from `1rem` which in most browsers equates to `16px`.

### Design software
For doing mockups in software like Sketch or Photoshop, use pixel values which are divisible by 4.

### Development
Developers should use `AU-fontgrid` and `AU-space` SCSS functions.

The `AU-space` accepts a default unnamed unit `1unit` and outputs a scalable / accessible value `1rem` as well as a fallback for older browsers `16px`.
