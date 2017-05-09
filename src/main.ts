import test from 'test'
import { map, range } from 'lodash'

window.document.title = 'EPA!'
document.body.innerHTML = 'test ' + test(103)

const numbers = range(1, 11)
const result = map(numbers, n => 2 * n)
console.log('result', result)
