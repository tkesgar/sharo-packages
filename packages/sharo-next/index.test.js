/* eslint-env jest */
const path = require('path')
const {execSync: exec} = require('child_process')

describe('hello', () => {
  const cwd = path.resolve('./test/hello')

  it('should build successfully', () => {
    exec('next build', {cwd})
  })
})
