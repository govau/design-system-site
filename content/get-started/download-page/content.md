If you haven't worked with `npm` before, you can download the Design System components directly on the [downloads page](https://designsystem.gov.au/download/).

Select the components you wish to use and press download.

**Option 1** 

If you wish to download the CSS and JS for each component in a single, bundled file, select the "CSS minified" and "JavaScript minified" radio buttons. We use a tool called [furnace](https://github.com/govau/furnace) to which builds zip files based on each selected component and options that are selected. The below folder will be downloaded onto your computer. 

```nocopy
AU-DesignSystem/
  package.json
  css/
    furnace.min.css
  js/
    furnace.min.js
```

Copy the CSS and JS files into your project directory, and add an index.html file.

```nocopy
/example-project
    docs/
        css/
            furnace.min.css
        js/
            furnace.min.js
    index.html
```
Here is an example of how to reference these assests in your `index.html` file.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>My Example Project</title>

        <!-- BELOW SCRIPT IS TO SUPPORT NO JS -->
        <script type="text/javascript">
            var $html = document.documentElement; if ($html.classList) $html.classList.remove("no-js"), $html.classList.add("js"); else { var className = "no-js"; $html.className = $html.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " "), $html.className += " js" }
        </script> 

        <!-- LINK TO MAIN CSS FILE-->
        <link rel="stylesheet" href="css/furnace.min.css">
    </head>
    <body>
        <!-- ADD DESIGN SYSTEM COMPONENT CODE BELOW -->

        <button class="au-btn">
            Primary button
        </button>

        <!-- THE LINK TO PANCAKE JAVASCRIPT FILE-->
        <script src="js/furnace.min.js" />
    </body>
</html>
```

The starter [HTML code for each component](https://designsystem.gov.au/components/) can be viewed in the Design System Documentation website. You can directly copy and paste these code snippets into the index.html file.

> Note, you can only add code snippets for the components you have downloaded.

If you would like to add support for older browsers, you will need to [add some snippets of code](#important) to the above `index.html` file.

**Option 2**

To download the individual CSS and JavaScript files for each component, select "CSS modules" and "JavaScript modules".


**Option 3** 

The React and SASS modules can be downloaded by selecting the "SASS modules" and "React modules" respectively.


