'use strict'
import '../always-global/global.js'
var elliptic = global.elliptic

if (typeof (process) !== 'undefined' && process.release && process.release.name === 'node' && typeof (require) !== 'undefined') {
  elliptic = global.elliptic = require('./lib/elliptic.js')
} else {
  if (global.elliptic === undefined) console.error('elliptic.js must be loaded explicitly from the dist dir, since there is no direct esm support')
}

export { elliptic }
