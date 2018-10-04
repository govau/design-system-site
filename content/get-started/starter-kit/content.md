## Get started
We have created a starter kit with some templates that can be used to get up and running with the Design System. You can view the [live version](https://govau.github.io/uikit-starter/) or go to the [starter kit github repository](https://github.com/govau/uikit-starter) for all the code.

The starter pack uses npm (node package manager) to set up a local development environment and install the Design System components. The default package manager for Node is npm. When you download Node, npm comes pre-installed.

1. Make sure you have npm and Node installed on your computer. You can follow the [npm instructions](https://www.npmjs.com/get-npm) if you are unsure.

1. Download or clone the design system starter kit code into a folder on your computer. Follow the instructions on [how to clone/download a repository](https://help.github.com/articles/cloning-a-repository/) for more guidance.

1. In the command line or terminal go into this folder and run `npm install`. This will install dependencies necessary for the local development environment.

1. You should now be ready to start your local server by running `npm run watch`. This will watch for changes on `*.scss` files, create new `*.css` files and refresh the browser.


## How it works

In your directory you have a `package.json` file. This file points to dependencies to install when running `npm install`. When you run `npm install` you install all of the Design System components and additional packages related to the local development environment.

After `npm install` [Pancake](https://github.com/govau/pancake) is ran, this checks that your dependencies work together and creates the `docs/js/script.min.js` and `src/sass/_uikit.scss`.

The `src/sass/main.scss` imports the `_uikit.scss` file. You shouldn't edit the `_uikit.scss` file as it is auto generated, but feel free to change the `main.scss` file. 

When the user runs `npm run build` or `npm run watch` we use [node-sass]("https://www.npmjs.com/package/node-sass?activeTab=versions") to convert the `src/sass/main.scss` file into the `docs/css/main.css` file. [Autoprefixer]("https://www.npmjs.com/package/autoprefixer") is ran after compilation to add vendor prefixes to the `main.css` file.

> Refer to the `package.json` scripts for how this has been set up

This set up allows you to modify the variables in the Design System file from the `main.scss` file. You can [add your own colour scheme](get-started/customise-color), or [change the typography and spacing](get-started/font-size-space). Tweaks to the components or additional ones should be added below the import of `_uikit.scss`. Changes to these files will be injected into your browser so you don’t even need to refresh thanks to [Browser Sync](https://www.browsersync.io/).

The `docs` folder contains all the files required to publish a website. The `index.html` file references the `main.css` file and `script.min.js` assets to generate the page. We name the folder `docs` because [github pages](https://pages.github.com/) uses the docs folder to host static websites. 

To start using other components you can copy paste the [HTML code snippets](http://localhost:8080/components/) from the documentation into the `index.html` or other `html` file that you may have created.




## Contributing

To contribute to the Australian Government Design System Starter Pack:
1. Fork the project & clone it locally.
1. Create a new branch for the work that is going to be completed.
1. Complete the work and test it to the best of your abilities following the [guidelines here](https://github.com/govau/uikit#checklist-and-browser-support).
1. Once the work is completed, write a good commit message.
1. Push your work to GitHub and create a new pull request.
1. Respond to any code review feedback.

