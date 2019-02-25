/* eslint-env browser */
// Post data to parent thread
self.postMessage({foo: 'foo'})

// Respond to message from parent thread
self.addEventListener('message', event => {
  console.log('Hello from worker!')
  console.log(event)
})
