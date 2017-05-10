// Polyfills
import 'whatwg-fetch'
import 'es6-promise/auto'

import documentMetas from 'utils/document-metas'

(async function () {
   const metas = await documentMetas
   console.log('metas', metas)
})()
