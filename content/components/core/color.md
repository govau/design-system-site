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
      $AU-color-foreground-action:     #00698f;
      $AU-color-foreground-focus:      #ea4200;
      $AU-color-foreground-text:       #313131;
      $AU-color-background:            #fff;
      $AU-colordark-foreground-action: #61daff;
      $AU-colordark-foreground-focus:  #ff8629;
      $AU-colordark-foreground-text:   #fff;
      $AU-colordark-background:        #135E70;
---

Our design system uses colour in a range of meaningful and intentional ways to create patterns and visual cues. We provide two colour palettes.

These palettes work together to support a variety of uses cases and provide a consistent look for action or link colours and focus states regardless of the palette combination.

Our colour palettes have also been designed to be implemented in a themeable manner. The universal colour variables are determined by common roles and usage; they are not based singularly on a unique colour value (hex code). The same colour value may be assigned to multiple variables in a theme's palette when the values have distinctly different roles.

