import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HomeBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "blm_mtl.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      style={
        {
          // maxHeight: "50vh",
        }
      }
    >
      <Img
        fluid={data.fileName.childImageSharp.fluid}
        style={{ 
          maxHeight: "60vh",
        }}
        alt="Black Lives Matter"
      />
    </div>
  )
}

export default HomeBanner;