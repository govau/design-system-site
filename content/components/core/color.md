---
layout: component/code-demo
example: examples/example-color
headline: Color
code:
  - SCSS: |
      // Light palette
      // ==============

      // Default values - can be overridden with your own colours
      $AU-color-foreground-action:     #00698f !default;
      $AU-color-foreground-focus:      #9263DE !default;
      $AU-color-foreground-text:       #313131 !default;
      $AU-color-background:            #ffffff !default;

      // Generated values - automatically created from default values
      // $AU-color-foreground-muted     (#626262)
      // $AU-color-foreground-border    (#808080)
      // $AU-color-background-shade     (#f5f5f5)
      // $AU-color-background-alt       (#ebebeb)
      // $AU-color-background-alt-shade (#e0e0e0)


      // Dark palette
      // ==============

      // Default values - can be overridden with your own colours
      $AU-colordark-foreground-action: #61daff !default;
      $AU-colordark-foreground-focus:  #C390F9 !default;
      $AU-colordark-foreground-text:   #ffffff !default;
      $AU-colordark-background:        #135E70 !default;

      // Generated values - automatically created from default values
      // $AU-colordark-foreground-muted     (#bdd2d7)
      // $AU-colordark-foreground-border    (#95b7bf)
      // $AU-colordark-background-shade     (#104f5f)
      // $AU-colordark-background-alt       (#0d414d)
      // $AU-colordark-background-alt-shade (#0a323c)

---

The colour palette is designed and tested to provide colour pairings that pass accessibility contrast ratios while still being easy to implement. This means that designers and developers using the system do not need to be concerned about if a colour will pass WCAG requirements  in a particular circumstance.

### Colour names imply their use

We use use semantic naming so that all colours labeled as `foreground` colours in a theme, are automatically tested to pass accessibility contrast ratios when used with all `background` colours within a theme and vice versa.

#### Tips

- **Do** pair foreground and background colours.
- **Don't** Mix light and dark variables.
- **Don't** pair foreground with foreground or background with background.
