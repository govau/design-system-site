Australian Government Design System - Website
====


| Production [![CircleCI](https://circleci.com/gh/govau/design-system-site/tree/master.svg?style=svg)](https://circleci.com/gh/govau/design-system-site/tree/master)                  | Staging [![CircleCI](https://circleci.com/gh/govau/design-system-site/tree/develop.svg?style=svg)](https://circleci.com/gh/govau/design-system-site/tree/develop)                        |
|-----------------------------|--------------------------------|
| https://designsystem.gov.au | https://designsystem.apps.y.cld.gov.au |
|                             | user: `ds`, pass: `ds`                 |


## Branches

All branches ending with `-test` will go live automatically to `https://designsystem[your-branch-name]-test.apps.y.cld.gov.au`.


## Prerequisites
- [`Node.js`](https://nodejs.org) **8 or higher**, preferably the current LTS version.

> **NOTE:** If you're developing on Windows, please ensure that [your local `npm` configuration is using a shell that supports UNIX like folder pathing](https://stackoverflow.com/questions/23243353/how-to-set-shell-for-npm-run-scripts-in-windows) ( i.e `a/unix/path`  rather than `a\\windows\\path` ).


## Install

Once cloned or downloaded, install the dependencies:

```bash
npm install
```

Then run the build:

```bash
npm run build
```

To run the watch while developing and spin up a local server run:

```bash
npm run watch
```
