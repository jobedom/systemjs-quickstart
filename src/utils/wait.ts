export default (msecs: number): Promise <boolean> => new Promise(resolve => {
   setTimeout(() => resolve(true), msecs)
})
