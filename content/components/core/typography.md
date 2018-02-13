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

System fonts have come a long way in recent times. Manufacturers are now shipping some very elegant fonts as default in their operating systems.

During research we met many Australians who live in rural and remote areas where Internet access is limited but government services are still required. Using system fonts makes the load times a whole lot faster for such users with only a slight compromise on aesthetics. 

Our typography also aligns to our spacing grid. Based on the fontsize and the lineheight we calculate the closest values that will align the typography to other items on the page.

