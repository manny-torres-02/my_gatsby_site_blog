import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://i0.wp.com/rafu.com/wp-content/uploads/2020/09/totoro-imageboard.jpg"
      />

<StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src='../images/cropped.jpg'      />

      <h1> HELLO </h1>
    </Layout>
  )
}

export default IndexPage