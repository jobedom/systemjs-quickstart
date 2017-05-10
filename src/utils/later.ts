export default (): Promise <boolean> => new Promise(resolve => {
   setTimeout(() => resolve(true), 0)
})
