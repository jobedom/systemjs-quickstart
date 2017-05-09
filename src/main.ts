import test from 'test'
import { map, range } from 'lodash'
import moment from 'moment'

window.document.title = 'EPA!'
document.body.innerHTML = 'test ' + test(103)

const numbers = range(1, 11)
const result = map(numbers, test)
console.log('result', result)
const today = moment()
const str = today.format('*** dddd, D/MMMM/YYYY')
console.log('str', str)
