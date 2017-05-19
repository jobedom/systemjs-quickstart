import 'polyfills'

import documentReady from 'utils/document-ready'
import documentMetas from 'utils/document-metas'

const preconditions: Promise < void > [] = [
   documentReady
]

async function go() {
   await Promise.all(preconditions)
   console.log('metas', documentMetas)
}

go()
