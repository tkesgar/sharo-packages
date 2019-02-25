/* eslint-env jest */
const fs = require('fs')
const path = require('path')
const {execSync: exec} = require('child_process')

describe('default', () => {
  const cwd = path.resolve('./sample/default')
  const clientBundlePath = path.resolve(cwd, 'bundles/client.html')
  const serverBundlePath = path.resolve(cwd, 'bundles/client.html')

  beforeAll(() => {
    for (const path of [clientBundlePath, serverBundlePath]) {
      if (fs.existsSync(path)) {
        fs.unlinkSync(path)
      }
    }
  })

  it('should build successfully', () => {
    exec('next build', {cwd})
    fs.existsSync(path.resolve(cwd, 'bundles/client.html'))
    fs.existsSync(path.resolve(cwd, 'bundles/server.html'))
  })
})
