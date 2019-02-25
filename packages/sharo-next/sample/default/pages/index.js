import Worker from '../worker'

// eslint-disable-next-line import/no-unassigned-import, import/no-unresolved
import '../../../node_modules/bootstrap/scss/bootstrap'

const worker = new Worker()
worker.addEventListener('message', event => {
  console.log('Hello from main!')
  console.log(event)
})

export default () => 'Hello world!'
