'use strict'
require('../lib/index.js')

const render = require('brisky/render')
const test = require('./fn')

const app = {
  title: {
    tag: 'h1',
    text: 'test title'
  }
}

const node = render(app)
document.body.appendChild(node)

test(node.firstChild)
