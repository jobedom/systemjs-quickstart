import documentReady from 'utils/document-ready'
import { each } from 'lodash'

interface IMetas {
   [key: string]: string
}

const metas: IMetas = {}

documentReady.then((): void => {
   const metaTags: NodeListOf < HTMLMetaElement > = document.getElementsByTagName('meta')
   each(metaTags, (metaTag: HTMLMetaElement): void => {
      metas[metaTag.name] = metaTag.content
   })
})

export default metas
