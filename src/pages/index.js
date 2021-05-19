import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout.js'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'am Levani</h2>
      <p>
        Need a developer <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
