import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout.js'


const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I currently learn gatsbyjs</p>
            <p>
                <Link to="/contact">Want to work with me? Reach out</Link>
            </p>
        </Layout>
    )
}

export default AboutPage
