import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header>
      <div className="container" id="nav">
        <Link to="/">
          <Img fixed={data.fileName.childImageSharp.fixed} alt="logo" />
        </Link>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/services/">Services</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
          <li><Link to="/donate/">Donate</Link></li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
