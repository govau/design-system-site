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

The colour palette is designed and tested to provide colour pairings that pass accessibility contrast ratios while still being easy to implement. This means that designers and developers using the system do not need to be concerned about if a colour will pass WCAG requirements  in a particular circumstance.

### Colour names imply their use

We use use semantic naming so that all colours labeled as `foreground` colours in a theme, are automatically tested to pass accessibility contrast ratios when used with all `background` colours within a theme and vice versa.

#### For example

**Do** - pair foreground and background colours.
```
color:      $AU-color-background;
background: $AU-color-foreground-action;
```

**Don't** - Mix light and dark variables.
```
color:      $AU-colordark-foreground-action;
background: $AU-color-background;
```
