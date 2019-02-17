Development environments have many benefits when using the design system. You can easily override variables in the components and see the changes throughout the system instantly.

If you have any trouble throughout this process you can pick up a pre-made development environment with the [design system starter](https://github.com/govau/design-system-starter) and follow our [guide on how to use it](/get-started/starter-kit).

## Initial set up

We need to set up our directory so that we have a clear pipeline for development files and the final product.

Create a `docs/` folder. This will hold all of the files needed for the website to render in the browser. Lets move our current `index.html` or [create a new `index.html`](/get-started/npm-install/#4-create-a-page) in the `docs` folder.

We also are going to change the [Pancake](https://github.com/govau/pancake) settings in the `package.json` file to better suit our project structure. Lets change the location and file name for the sass and JavaScript files.
```json
"sass": {
  "modules": false,
  "location": "src/sass/",
  "name": "au-ds.scss"
},
"js": {
  "minified": true,
  "modules": false,
  "location": "docs/js/",
  "name": "script.min.js"
},
```

> When you make changes to the settings of pancake you need to run pancake again. This can be done by running `npm install` or by running `node node_modules/.bin/pancake`

The final result should look like:
```nocopy
design-system-starter/
├─ node_modules/
└─ docs/
  ├─ js/script.js
  └─ index.html
└─ src/sass
  └─ main.scss
  └─ au-ds.scss
├─ package-lock.json
└─ package.json
```


## Packages required for local development

Now that we are set up we can install additional packages:
- [browser-sync](https://www.npmjs.com/package/browser-sync), local development server that reloads the browser when a file changes
- [node-sass](https://www.npmjs.com/package/node-sass), compiles SASS files into CSS files
- [on-change](https://www.npmjs.com/package/onchange), watches for changes to the files
- [postcss-cli](https://www.npmjs.com/package/postcss-cli), library for transforming styles, used by autoprefixer
- [autoprefixer](https://www.npmjs.com/package/autoprefixer), adds [vendor prefixes](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) to the CSS file automatically

```bash
npm install browser-sync node-sass on-change postcss-cli autoprefixer
```

## Scripts

With these packages installed we need to update the `package.json` file so we can run commands that create our local environment.

We need to create npm scripts that do the following tasks:
- `build`: runs `build:css` to compile SASS into CSS and `build:autoprefix` to autoprefix the compiled CSS
- `build:autoprefix` add prefixes to the compiled CSS
- `build:css`: compile the SASS into CSS with a compressed output and source maps
- `serve`: start the local server and refresh the browser when `.html`, `main.css` or `script.js` files change
- `watch`: runs `build` to create files then `serve` to start the local server and finally `watch:sass` for building CSS when SASS changes
- `watch:sass`: watch the sass directory for changes and compile SASS to CSS when it does

To do this we edit the `scripts` in the `package.json` file:
```json
"scripts": {
  "build": "build:css && npm run build:autoprefix",
  "build:autoprefix": "postcss docs/css/main.css -u autoprefixer -r -m",
  "build:css": "node-sass --output-style compressed --source-map true src/sass/main.scss docs/css/main.css",
  "serve": "browser-sync start --server ./docs -w --files \"./docs/index.html\" \"./docs/css/main.css\" \"./docs/js/script.js\"",
  "watch": "npm run build && npm run serve & npm run watch:sass"
  "watch:sass": "onchange './src/sass/**/*.scss' -- npm run build",
}
```
Autoprefixer uses [Browserslist](https://www.npmjs.com/package/browserslist), so you can specify the browsers you want to target with the `browserlist` key in the `package.json` file as below:

```json
"browserslist": [
  "last 2 versions",
  "ie 8", 
  "ie 9", 
  "ie 10" 
]
```

You can now run `npm run watch` to build your website and watch for any changes to your files. This will start a local development server at `http://localhost:3030/`.


> Make sure to update your `index.html` file to work with the new path locations for `js/script.js` and your compiled SASS, `css/style.css`.
