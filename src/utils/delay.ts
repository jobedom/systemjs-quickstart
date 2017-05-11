export default (msec: number): Promise < void > =>
   new Promise < void > ((resolve: () => void): void => {
      setTimeout(resolve, msec)
   })
