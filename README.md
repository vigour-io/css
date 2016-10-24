# css

[![Build Status](https://api.travis-ci.org/vigour-io/css.svg)](https://travis-ci.org/vigour-io/css)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm (scoped)](https://img.shields.io/npm/v/@vigour-io/css.svg)](https://github.com/vigour-io/css)

Vigour variables, assets and styles

## Getting started

### Install it:
```shell
npm i @vigour-io/css --save
```

### Require it:
```js
require('@vigour-io/css')
```

### Use it:
```js
const render = require('brisky/render')

const app = {
  icon: {
    type: 'icon',
    class: 'icon-menu'
  }
}

document.body.appendChild(render(element))
```

## This repo configures:

* Font-family: FF Mark - Vigour-branded typeface
* The Vigour icon set
* The Vigour branded color palette:
```
:root {
  --color-a: #001e49; /* Dark Blue */
  --color-b: #00c4dd; /* Vigour Blue */
  --font-color-a: #001e49; /* Dark Blue */
  --font-color-b: #001e49; /* Dark Blue */
  --icon-color-a: #fff; /* White */
  --icon-color-b: #001e49; /* Dark Blue */
  --bg-color-a: #fff; /* White */
  --bg-color-b: #ff0049; /* Dark Blue */
  --accent-color-a: #ff0049; /* Vigour Crimson */
}
```