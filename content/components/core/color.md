---
layout: component/code-demo
example: examples/example-color
headline: Color
code:
  - HTML: |
      <div class="palette--foreground-action">$AU-color-foreground-action</div>
      <div class="palette--foreground-focus">$AU-color-foreground-focus</div>
      <div class="palette--foreground-text">$AU-color-foreground-text</div>
      <div class="palette--foreground-muted">$AU-color-foreground-muted</div>
      <div class="palette--foreground-border">$AU-color-foreground-border</div>
      <div class="palette--background">$AU-color-background</div>
      <div class="palette--background-shade">$AU-color-background-shade</div>
      <div class="palette--background-alt">$AU-color-background-alt-shade</div>
      <div class="palette--background-alt-shade">$AU-color-foreground-action</div>
  - SCSS: |
      .palette--foreground-action {
        background: $AU-color-foreground-action;
      }
      .palette--foreground-focus {
        background: $AU-color-foreground-focus;
      }
      .palette--foreground-text {
        background: $AU-color-foreground-text;
      }
      .palette--foreground-muted {
        background: $AU-color-foreground-muted;
      }
      .palette--foreground-border {
        background: $AU-color-foreground-border;
      }
      .palette--background {
        background: $AU-color-background;
      }
      .palette--background-shade {
        background: $AU-color-background-shade;
      }
      .palette--background-alt {
        background: $AU-color-background-alt;
      }
      .palette--background-alt-shade {
        background: $AU-color-background-alt-shade;
      }
---

Our design system uses colour in a range of meaningful and intentional ways to create patterns and visual cues. We provide two colour palettes.

These palettes work together to support a variety of uses cases and provide a consistent look for action or link colours and focus states regardless of the palette combination.

Our colour palettes have also been designed to be implemented in a themeable manner. The universal colour variables are determined by common roles and usage; they are not based singularly on a unique colour value (hex code). The same colour value may be assigned to multiple variables in a theme's palette when the values have distinctly different roles.

