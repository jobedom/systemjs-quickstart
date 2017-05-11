// Polyfills
import 'whatwg-fetch'
import 'es6-promise/auto'

import documentReady from 'utils/document-ready'
import metas from 'utils/document-metas'

(async() => {
   await Promise.all([
      documentReady
   ])
   console.log('metas', metas)
})()
