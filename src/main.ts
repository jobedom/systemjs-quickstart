// Polyfills
import 'whatwg-fetch'
import 'es6-promise/auto'


import moment from 'moment'
import mousetrap from 'mousetrap'
import { map, range } from 'lodash'

import test from 'test'

window.document.title = 'EPA!'
document.body.innerHTML = 'test ' + test(103)

const numbers = range(1, 11)
const result = map(numbers, test)
console.log('result', result)
const today = moment()
const str = today.format('*** dddd, D/MMMM/YYYY')
console.log('str', str)
mousetrap.bind('ctrl+g', () => {
   console.log('Epa!')
})

const prom = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('EPA')
   }, 2000)
})

prom.then(value => {
   console.log('value', value)
})

console.log(prom)
console.log(fetch)
