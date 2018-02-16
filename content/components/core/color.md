---
layout: component/code-demo
example: examples/example-color
headline: Color
code:
  - SCSS: |
      /**
       * Light palette
       */
      $AU-color-foreground-action:        #00698f;
      $AU-color-foreground-focus:         #ea4200;
      $AU-color-foreground-text:          #313131;
      $AU-color-background:               #ffffff;

      // Automatically generated accessible color values
      // $AU-color-foreground-muted:         #636363;
      // $AU-color-foreground-border:        #7f7f7f;
      // $AU-color-background-shade:         #f5f5f5;
      // $AU-color-background-alt:           #ebebeb;
      // $AU-color-background-alt-shade:     #e0e0e0;


      /**
       * Dark palette
       */
      $AU-colordark-foreground-action:    #61daff;
      $AU-colordark-foreground-focus:     #ff8629;
      $AU-colordark-foreground-text:      #ffffff;
      $AU-colordark-background:           #135E70;

      // Automatically generated accessible color values
      // $AU-colordark-foreground-muted:     #b7cfd5;
      // $AU-colordark-foreground-border:    #8bacb3;
      // $AU-colordark-background-shade:     #104f5f;
      // $AU-colordark-background-alt:       #0d414d;
      // $AU-colordark-background-alt-shade: #0a323c;

---

Our design system uses colour in a range of meaningful and intentional ways to create patterns and visual cues. We provide two colour palettes.

These palettes work together to support a variety of uses cases and provide a consistent look for action or link colours and focus states regardless of the palette combination.

Our colour palettes have also been designed to be implemented in a themeable manner. The universal colour variables are determined by common roles and usage; they are not based singularly on a unique colour value (hex code). The same colour value may be assigned to multiple variables in a theme's palette when the values have distinctly different roles.

