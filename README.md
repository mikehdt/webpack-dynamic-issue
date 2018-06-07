# Webpack Broken Async HMR Import Demo

This is a simple code repo to test Webpack's async import / hot reloading capability

## Getting Started

I'm using `yarn`, so if you're using `npm` you may need to adapt the package a little.

To start, clone the repo, run `yarn` to install all the dependencies.

## Scripts

`yarn start` will begin the project as expected
`yarn start-broken` will install Webpack 4.10.2 and then `start`
`yarn start-working` will install Webpack 4.9.2 and then `start`

## How to test

As the hot server will do a full reload automatically if a critical HMR error occurs, I recommend setting your browser's console log to "Preserve log" (for Chrome, other options available in other browsers).

Once the project is running, open `src/components/ImportAsync.js` and try to change the content. With Webpack 4.9.2, it will reload in-place and accept the hot reload. With Webpack 4.10.2, it will fail to reconcile the dynamic import and force a full refresh, issuing a console warning.

Note that in *both* cases, editing the content of `src/components/ImportSync.js` hot reloads without issue.