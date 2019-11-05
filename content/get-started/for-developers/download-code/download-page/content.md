If you are not familiar with `npm` and want to use the design system, we have created a [download page](/download) to help.

Once on the page you can select the components you wish to use and choose how you want do download them.

- **CSS minified** will bundle the CSS of the components into a single file to be used directly in HTML.
- **CSS modules** are used with modern JavaScript allowing you to import styles specific component styles.
- **SASS modules** will create multiple SASS files that can be imported into a `main.scss` file.
- **JavaScript minified** will bundle the JavaScript of the components together and minify them for use directly in HTML.
- **JavaScript modules** are used when you want to break a part the components functionality.
- **React modules** allow the components to be imported directly into React.



**Minified CSS and JavaScript**

If you wish to download the CSS and JavaScript for each component in a single, bundled file, select the "CSS minified" and "JavaScript minified". The result will be a zip file containing:
```nocopy
AU-DesignSystem/
├─ package.json
└─ css/
  └─ furnace.min.css
└─ js/
  └─ furnace.min.js
```

You can now move these CSS and JavaScript files into a project directory or create an `index.html` file that references them.

Here is an example of how to reference these assets in your `index.html` file.
```html
<!DOCTYPE html>
<!--[if lt IE 8]>
  <html class="no-js lt-ie8 lt-ie9" lang="en">
<![endif]-->
<!--[if IE 8]>
  <html class="no-js lt-ie9 ie8" lang="en">
<![endif]-->
<!--[if IE 9 ]>
  <html class="no-js ie9" lang="en">
<![endif]-->
<!--[if !(IE)]><!-->
  <html class="no-js" lang="en">
<!--<![endif]-->
<head>
  <meta charset="utf-8">
  <title>Design system starter</title>
  
  <!-- Removes the no-js class on the <html> tag -->
  <script type="text/javascript">
    var $html = document.documentElement; if ($html.classList) $html.classList.remove("no-js"), $html.classList.add("js"); else { var className = "no-js"; $html.className = $html.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " "), $html.className += " js" }
  </script>

  <!-- HTML5 and media query support for IE8, we recommend inserting these inline -->
  <!--[if lt IE 9]>
    <script src="https://raw.githubusercontent.com/aFarkas/html5shiv/master/dist/html5shiv.min.js"></script>
    <script src="https://raw.githubusercontent.com/scottjehl/Respond/master/dest/respond.min.js">
    </script>
  <![endif]-->

  
  <!-- Component styles -->
  <link rel="stylesheet" href="css/furnace.min.css">
</head>
<body>
 
  <!-- An example component -->
  <section class="au-accordion">
    <a href="#accordion-default" class="au-accordion__title js-au-accordion" aria-controls="accordion-default" aria-expanded="true" role="tab" onclick="return AU.accordion.Toggle( this )">Wuhuu design system</a>
    <div class="au-accordion__body" id="accordion-default">
      <div class="au-accordion__body-wrapper">
        And it looks good :)
      </div>
    </div>
  </section>
 
  <!-- Component javscript -->
  <script src="js/furnace.min.js"></script>
</body>
</html>
```

You can now copy and paste [HTML code for each component](/components) into this `index.html` file.

> Note, you can only add code snippets for the components you have downloaded. If you wish to add more components, use the download page again and replace the generated files.
