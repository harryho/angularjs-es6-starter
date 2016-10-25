# angularjs-webpack-es6-starter

This starter was inspired by another similar angular webpack starter repository. It simply includes font-awesome, bootstrap for the people who don't want to use boostrap-webpack, font-awesome-webpack. I find it saves us so much effort to create prototype, since we don't need spectacular UI.


* This starter uses angular 1.5 for someone want to build component.
* This repo followes mvc patterns instead of component pattern. 
* ES6, and ES7 support with babel.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* Include font-awesome without font-awesome-loader.
* Include Bootstrap 3 without bootstrap-loader.
* No gulp and no grunt, just npm scripts.


### Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone our repo
$ git clone https://github.com/harryho/angularjs-webpack-es6-starter.git demoApp

# change directory to your app
$ cd demoApp

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)