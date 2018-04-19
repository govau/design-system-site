Australian Government Design System
====

| Production                  | Staging                                |
|-----------------------------|----------------------------------------|
| https://designsystem.gov.au | https://designsystem.apps.y.cld.gov.au |
|                             | user: `ds`, pass: `ds`                 |


## Branches

All branches ending with `-test` will go live automatically to `https://designsystem[your-branch-name]-test.apps.y.cld.gov.au`.

## Install

To run this repository please install [`node`](https://nodejs.org) 6 or higher.

Once cloned/pulled/downloaded install dependencies:

```shell
npm install
```

Then run the build:

```shell
npm run build
```

To run the watch while developing and spin up a local server run:

```shell
npm run watch
```
