'use strict'

require('dotenv').config({ silent: true })
require('now-logs')('phim.clgt.vn')
require('./lib/array-concatAll')

const server = require('./lib/server')
console.log('LOG: ', process.env.PORT)
server.listen(process.env.PORT, () => {
  console.log(`app run on http://0.0.0.0:${process.env.PORT}`)
})
