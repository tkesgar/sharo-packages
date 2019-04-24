/* eslint-env jest */
const path = require('path')
const {execSync: exec} = require('child_process')

describe('default', () => {
  const cwd = path.resolve('./sample/default')
  it('should build successfully', () => {
    exec('next build', {cwd})
  })
})
