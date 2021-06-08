---
layout: component/code-demo
iframe: examples/example-spacing
code:
  - SCSS: |
      // SCSS iframe:

      @include AU-space( padding, 1unit );

      // CSS Output:

      // padding: 16px;
      // padding: 1rem;

---
## Spacing

The consistent alignment of elements is paramount for good UI design. The design system provides functions in SCSS so that designers and developers can work together with predictable outcomes.

The base-unit `1unit` of spacing in the design system is derived from `1rem` which in most browsers equates to `16px`.

### Development
Developers should use `AU-fontgrid` and `AU-space` SCSS functions.

The `AU-space` accepts a default unnamed unit `1unit` and outputs a scalable / accessible value `1rem` as well as a fallback for older browsers `16px`.
