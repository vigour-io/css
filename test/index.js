'use strict'
require('../lib/index.js')

const render = require('brisky/render')
const test = require('./fn')

const app = {
  inject: [ require('../lib/logo.js') ],
  title: {
    tag: 'h1',
    text: 'test title'
  },
  logo: {
    type: 'logo'
  }
}

const node = render(app)
document.body.appendChild(node)

test(node.firstChild)
