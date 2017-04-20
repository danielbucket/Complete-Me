'use strict'

const path = require('path')
const fs = require('fs')

fs.readFile(
  path.resolve(__dirname, 'lucas.json'), 'utf8',
  (err, data) => console.log(err || data)
)
