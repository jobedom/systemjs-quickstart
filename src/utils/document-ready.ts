export default new Promise < void > ((resolve: () => void): void => {
   if (/^(complete|loaded|interactive)$/i.test(document.readyState))
      resolve()
   else
      document.addEventListener('DOMContentLoaded', resolve)
})
