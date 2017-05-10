import ready from 'document-ready-promise'
import { fromPairs, map } from 'lodash'

const getDocumentMetas = (): _.Dictionary<string> => {
   const metaTags = document.getElementsByTagName('meta')
   const makePair = tag => [tag.name, tag.content]
   const metas = fromPairs(map(metaTags, makePair))
   return metas
}

export default ready().then(getDocumentMetas)
