import ready from 'document-ready-promise'
import { fromPairs, map } from 'lodash'

interface DocumentMetas {
   [key: string]: string;
}

const getDocumentMetas = (): DocumentMetas => {
   const metaTags = document.getElementsByTagName('meta')
   const makePair = tag => [tag.name, tag.content]
   const metas = fromPairs(map(metaTags, makePair))
   return metas
}

export default ready().then(getDocumentMetas)
