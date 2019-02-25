import React from 'react'
import MDXFile, {meta} from '../sample.mdx'

const {authors, layout: Layout} = meta

export default () => (
  <Layout>
    <MDXFile/>
    By: {authors.map(author => author.name)}
  </Layout>
)
